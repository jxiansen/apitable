import { Field, FieldType, IMeta, IRecord, IRecordMap, IReduxState } from '@apitable/core';
import { Span } from '@metinseylan/nestjs-opentelemetry';
import { Injectable } from '@nestjs/common';
import { dbQueryBatchSize } from 'app.environment';
import { DatasheetMetaRepository } from 'database/datasheet/repositories/datasheet.meta.repository';
import { get, isEmpty, keyBy, orderBy } from 'lodash';
import { Store } from 'redux';
import { RecordHistoryTypeEnum } from 'shared/enums/record.history.enum';
import { DBHelper } from 'shared/helpers';
import { IApiPaginateRo, IPaginateInfo } from 'shared/interfaces';
import { UnitInfoDto } from 'unit/dtos/unit.info.dto';
import { UserService } from 'user/services/user.service';
import { ArchivedRecord } from '../../interfaces';
import { ChangesetBaseDto } from '../dtos/changeset.base.dto';
import { CommentEmojiDto } from '../dtos/comment.emoji.dto';
import { RecordHistoryDto } from '../dtos/record.history.dto';
import { DatasheetRecordEntity } from '../entities/datasheet.record.entity';
import { DatasheetRecordArchiveRepository } from '../repositories/datasheet.record.archive.repository';
import { DatasheetRecordRepository } from '../repositories/datasheet.record.repository';
import { RecordHistoryQueryRo } from '../ros/record.history.query.ro';
import { DatasheetChangesetService } from './datasheet.changeset.service';
import { RecordCommentService } from './record.comment.service';

@Injectable()
export class DatasheetRecordService {
  constructor(
    private readonly recordRepo: DatasheetRecordRepository,
    private readonly datasheetMeta: DatasheetMetaRepository,
    private readonly recordArchiveRepo: DatasheetRecordArchiveRepository,
    private readonly recordCommentService: RecordCommentService,
    private readonly datasheetChangesetService: DatasheetChangesetService,
    private readonly userService: UserService,
  ) {}

  @Span()
  async getRecordsByDstId(dstId: string, includeCommentCount = true, includeArchivedRecords = false): Promise<IRecordMap> {
    if (includeArchivedRecords) {
      return await this.getAllRecordsByDstId(dstId, includeCommentCount);
    }
    return await this.getUnarchivedRecordsByDstId(dstId, includeCommentCount);
  }

  /**
   * get all records including the archived records. only used in subscription.
   * @param dstId
   * @param includeCommentCount
   */
  @Span()
  async getAllRecordsByDstId(dstId: string, includeCommentCount = true): Promise<IRecordMap> {
    // We do not expect to query all the records of dstId at once,
    // which will cause excessive memory usage. We expect to use paging to load the records of dstId.
    const counts = await this.recordRepo.count({ dstId, isDeleted: false });
    // Use paging to load records of dstId
    const pageSize = 2000;
    const pageCount = Math.ceil(counts / pageSize);
    let records: DatasheetRecordEntity[] = [];
    for (let i = 0; i < pageCount; i++) {
      const tmpRecords = await this.recordRepo.find({
        select: ['recordId', 'data', 'revisionHistory', 'createdAt', 'updatedAt', 'recordMeta'],
        where: { dstId, isDeleted: false },
        skip: i * pageSize,
        take: pageSize,
      });
      records = records.concat(tmpRecords);
    }
    let commentCountMap = {};
    if (includeCommentCount) {
      commentCountMap = await this.recordCommentService.getCommentCountMapByDstId(dstId);
    }
    return this.formatRecordMap(records, commentCountMap);
  }

  /**
   * only query the table records. resolve slow sql.
   * @param dstId
   * @param includeCommentCount
   */
  @Span()
  async getUnarchivedRecordsByDstId(dstId: string, includeCommentCount = true): Promise<IRecordMap> {
    // get count from metadata more efficient
    const recordIds: string[] = await this.datasheetMeta.selectRecordIdsByDstId(dstId);
    return this.getRecordsByDstIdAndRecordIds(dstId, recordIds, false, includeCommentCount, false, dbQueryBatchSize);
  }

  async batchSave(records: any[]) {
    return await this.recordRepo.createQueryBuilder().insert().values(records).execute();
  }

  @Span()
  async getRecordsByDstIdAndRecordIds(
    dstId: string,
    recordIds: string[],
    isDeleted = false,
    includeCommentCount = true,
    includeArchivedRecords = false,
    batchSize?: number,
  ): Promise<IRecordMap> {
    if (recordIds && recordIds.length === 0) {
      return {};
    }
    let records = await DBHelper.batchQueryByRecordIdIn(
      this.recordRepo,
      ['recordId', 'data', 'revisionHistory', 'createdAt', 'updatedAt', 'recordMeta'],
      recordIds,
      { dstId, isDeleted },
      batchSize,
    );
    let commentCountMap = {};
    if (includeCommentCount) {
      commentCountMap = await this.recordCommentService.getCommentCountMapByDstId(dstId);
    }
    if (!includeArchivedRecords) {
      const archivedRecordIds = await this.recordArchiveRepo.getArchivedRecordIdsByDstIdAndRecordIds(dstId, recordIds);
      if (archivedRecordIds && archivedRecordIds.size > 0) {
        records = records.filter((record) => !archivedRecordIds.has(record.recordId));
      }
    }

    return this.formatRecordMap(records, commentCountMap, recordIds);
  }

  @Span()
  async getBasicRecordsByRecordIds(dstId: string, recordIds: string[], isDeleted = false, includeArchivedRecords = false): Promise<IRecordMap> {
    let records = await DBHelper.batchQueryByRecordIdIn(this.recordRepo, ['recordId', 'data', 'createdAt', 'updatedAt', 'recordMeta'], recordIds, {
      dstId,
      isDeleted,
    });
    if (!includeArchivedRecords) {
      const archivedRecordIds = await this.recordArchiveRepo.getArchivedRecordIdsByDstIdAndRecordIds(dstId, recordIds);
      if (archivedRecordIds && archivedRecordIds.size > 0) {
        records = records.filter((record) => !archivedRecordIds.has(record.recordId));
      }
    }
    return this.formatRecordMap(records, {}, recordIds);
  }

  async getIdsByDstIdAndRecordIds(dstId: string, recordIds: string[], includeArchivedRecords = false): Promise<string[] | null> {
    const records = await DBHelper.batchQueryByRecordIdIn(this.recordRepo, ['recordId'], recordIds, { dstId, isDeleted: false });
    let dbRecordIds = records.map((entity) => entity.recordId);
    if (!dbRecordIds) {
      return dbRecordIds;
    }
    if (!includeArchivedRecords) {
      const archivedRecordIds = await this.recordArchiveRepo.getArchivedRecordIdsByDstIdAndRecordIds(dstId, dbRecordIds);
      if (archivedRecordIds && archivedRecordIds.size > 0) {
        dbRecordIds = dbRecordIds.filter((record) => !archivedRecordIds.has(record));
      }
    }
    return dbRecordIds;
  }

  /**
   * TODO optimize data query, reduce compose uses, reduce loops
   * @param spaceId space ID
   * @param dstId datasheet ID
   * @param recordId record ID
   * @param query query parameters
   * @param showRecordHistory if record change history is shown
   * @param fieldIds IDs of preserved fields
   * @return
   * @author Zoe Zheng
   * @date 2021/4/9 4:05 PM
   */
  async getActivityList(
    spaceId: string,
    dstId: string,
    recordId: string,
    showRecordHistory: boolean,
    query: RecordHistoryQueryRo,
    fieldIds: string[],
  ): Promise<RecordHistoryDto | null> {
    let changesets: ChangesetBaseDto[] = [];
    const units: UnitInfoDto[] = [];
    let emojis: CommentEmojiDto = {};
    const revisions = await this.getRecordRevisionHistoryAsc(dstId, recordId, query.type, showRecordHistory, query.limitDays);
    const maxRevisionIndex =
      query.maxRevision && revisions.includes(query.maxRevision.toString()) ? revisions.indexOf(query.maxRevision.toString()) : revisions.length;
    const canLoopRevisions = query.maxRevision ? revisions.slice(0, maxRevisionIndex).reverse() : revisions.reverse();
    if (!canLoopRevisions.length) {
      return { changesets, units, emojis, commentReplyMap: {} };
    }
    const doublePageSize = query.pageSize * 2;
    const maxTimes = Math.ceil(canLoopRevisions.length / doublePageSize);
    let lastChangeset: ChangesetBaseDto | undefined;
    for (let i = 0; i < maxTimes; i++) {
      // slice [)
      const tmp = canLoopRevisions.slice(i * doublePageSize, (i + 1) * doublePageSize);
      const result = await this.datasheetChangesetService.getRecordActivityChangesetList(spaceId, dstId, recordId, lastChangeset, tmp, fieldIds);
      // TODO this is problematic, when next page is empty, lastChangeset is not reset
      // If not last page, get last changeset of previous page, perform merging
      if (i + 1 != maxTimes && result.recordChangesets.length) {
        // In pagination of one query, numbers of merged changeset in adjacent pages
        // is at most doublePageSize * query.pageSize
        if (i != 0 && i % query.pageSize === 0) {
          lastChangeset = undefined;
        } else {
          lastChangeset = result.recordChangesets.pop();
        }
      }
      changesets.push(...result.recordChangesets);
      changesets.push(...result.commentChangesets);
      units.push(...result.users);
      if (changesets.length >= query.pageSize) {
        break;
      }
    }
    changesets = orderBy(changesets, ['revision'], ['desc']).slice(0, query.pageSize);
    // reduce queried data size
    const mentionedRevisions: number[] = [];
    const replyCommentIds: Set<string> = new Set();
    changesets = changesets.map((item) => {
      if (item.isComment) {
        mentionedRevisions.push(Number(item.revision));
        const replyComment: {
          commentId?: string;
        } = get(item, 'operations.0.actions.0.li.commentMsg.reply') as unknown as { commentId?: string };
        if (replyComment && !isEmpty(replyComment) && replyComment.commentId) {
          // record replied comment ID
          replyCommentIds.add(replyComment.commentId);
        }
      }
      return { ...item, createdAt: item.tmpCreatedAt!, tmpCreatedAt: undefined };
    });
    if (mentionedRevisions.length) {
      const mentionedUsers = await this.recordCommentService.getMentionedUnitsByRevisions(dstId, recordId, mentionedRevisions);
      units.push(...mentionedUsers);
      emojis = await this.recordCommentService.getEmojisByRevisions(dstId, recordId, mentionedRevisions);
    }
    const commentReplyMap = await this.getCommentReplyMap(dstId, recordId, Array.from(replyCommentIds));
    return { changesets, units, emojis, commentReplyMap };
  }

  async getArchivedIdsByDstIdAndRecordIds(dstId: string, recordIds: string[]): Promise<Set<String>> {
    return await this.recordArchiveRepo.getArchivedRecordIdsByDstIdAndRecordIds(dstId, recordIds);
  }

  async getBaseRecordMap(dstId: string, includeCommentCount = false, ignoreDeleted = false, loadRecordMeta = false): Promise<IRecordMap> {
    const records = ignoreDeleted
      ? await this.recordRepo.selectRecordsDataByDstIdIgnoreDeleted(dstId)
      : await this.recordRepo.selectRecordsDataByDstId(dstId);
    const commentCountMap = includeCommentCount ? await this.recordCommentService.getCommentCountMapByDstId(dstId) : null;
    if (!records) {
      return {};
    }
    return records.reduce<IRecordMap>((pre, cur) => {
      pre[cur.recordId] = {
        id: cur.recordId,
        data: cur.data!,
        commentCount: commentCountMap && commentCountMap[cur.recordId] ? commentCountMap[cur.recordId]! : 0,
      };
      const record = pre[cur.recordId];
      if (loadRecordMeta && record) {
        record.recordMeta = cur.recordMeta;
      }
      return pre;
    }, {});
  }

  async getDeletedRecordsByDstId(dstId: string): Promise<string[]> {
    const records = await this.recordRepo.find({
      select: ['recordId'],
      where: { dstId, isDeleted: true },
    });
    return records.map((record) => record.recordId);
  }

  /**
   * Fetch comments by comment IDs
   *
   * @param dstId       datasheet ID
   * @param recordId    record ID
   * @param commentIds  comment ID set
   */
  async getCommentReplyMap(dstId: string, recordId: string, commentIds: string[]) {
    if (!commentIds.length) {
      return {};
    }
    const commentStateList = await this.recordCommentService.getCommentStateByCommentIds(dstId, recordId, commentIds);
    return commentStateList.reduce((commentStateMapById, originComment) => {
      commentStateMapById[originComment.commentId] = originComment.commentState
        ? { isDeleted: true, commentId: originComment.commentId }
        : originComment.commentMsg.content;
      return commentStateMapById;
    }, {});
  }

  async getArchivedRecords(dstId: string, query: IApiPaginateRo): Promise<IPaginateInfo<ArchivedRecord[]>> {
    const total = await this.recordArchiveRepo.countRowsByDstId(dstId);
    let { pageSize, pageNum } = query;
    pageSize = pageSize || 10;
    pageNum = pageNum || 1;
    if (total === 0) {
      return { total, pageSize: pageSize, pageNum: pageNum, records: [] };
    }
    const offset = (pageNum - 1) * pageSize;

    const recordArchiveEntities = await this.recordArchiveRepo.getArchivedRecords(dstId, pageSize, offset);

    const recordIds = recordArchiveEntities.map((record) => record.recordId);
    const userIds = recordArchiveEntities.map((record) => record.archivedBy);
    const recordMap = await this.getRecordsByDstIdAndRecordIds(dstId, recordIds, false, true, true);
    const userMap = await this.userService.getUserBaseInfoMapByUserIds(userIds as any[]);
    const resultData: ArchivedRecord[] = [];
    for (const recordEntity of recordArchiveEntities) {
      const user = userMap.get(recordEntity.archivedBy);
      const recordInfo = recordMap[recordEntity.recordId];
      resultData.push({
        record: recordInfo,
        archivedUser: user,
        archivedAt: recordEntity.archivedAt.getTime(),
      });
    }
    return {
      total,
      pageSize,
      pageNum,
      records: resultData,
    };
  }

  async getLinkRecordIdsByRecordIdAndFieldId(dstId: string, recordId: string, fieldId: string) {
    const raw = await this.recordRepo.selectLinkRecordIdsByRecordIdAndFieldId(dstId, recordId, fieldId);
    if (raw) {
      return raw[0]?.linkRecordIds;
    }
    return [];
  }

  public getRecordTitle(record: IRecord, datasheetMeta: IMeta, store: Store<IReduxState>) {
    const primaryFieldId = datasheetMeta.views[0]!.columns[0]!.fieldId;
    const primaryField = datasheetMeta.fieldMap[primaryFieldId]!;

    if (primaryField.type === FieldType.Formula) {
      return 'Formula primary field cannot be shown';
    }

    return Field.bindContext(primaryField, store.getState()).cellValueToString(record.data[primaryFieldId]!) || '';
  }

  async isRecordsDeleted(dstId: string, recordIds: string[]) {
    const count = await this.recordRepo.selectDeletedCountByDstIdAndRecordIs(dstId, recordIds);
    return count > 0;
  }

  async getArchivedRecordCount(dstId: string) {
    return await this.recordArchiveRepo.countRowsByDstId(dstId);
  }

  @Span()
  private formatRecordMap(
    records: DatasheetRecordEntity[],
    commentCountMap: {
      [key: string]: number;
    },
    recordIds?: string[],
  ): IRecordMap {
    if (recordIds) {
      // recordMap follows the order of 'records'
      const recordMap = keyBy(records, 'recordId');
      return recordIds.reduce<IRecordMap>((pre, cur) => {
        const record = recordMap[cur];
        if (record) {
          pre[cur] = {
            id: cur,
            data: record.data || {},
            createdAt: Date.parse(record.createdAt.toString()),
            updatedAt: record.updatedAt ? new Date(record.updatedAt).valueOf() : undefined,
            revisionHistory: record.revisionHistory?.split(',').map((x) => Number(x)),
            recordMeta: record.recordMeta,
            commentCount: commentCountMap[cur] || 0,
          };
        }
        return pre;
      }, {});
    }
    return records.reduce<IRecordMap>((pre, cur) => {
      if (!cur.recordId) {
        return pre;
      }
      pre[cur.recordId] = {
        id: cur.recordId,
        data: cur.data || {},
        createdAt: Date.parse(cur.createdAt.toString()),
        updatedAt: cur.updatedAt ? new Date(cur.updatedAt).valueOf() : undefined,
        revisionHistory: cur.revisionHistory?.split(',').map((x) => Number(x)),
        recordMeta: cur.recordMeta,
        commentCount: commentCountMap[cur.recordId] || 0,
      };
      return pre;
    }, {});
  }

  /**
   * Obtain record revisions in ascending order of revisions
   *
   * @param dstId datasheet ID
   * @param recordId record ID
   * @param type record history type
   * @param showRecordHistory if record change history is shown
   * @param limitDays limit days
   * @return string[]
   * @author Zoe Zheng
   * @date 2021/4/12 11:48 AM
   */
  private async getRecordRevisionHistoryAsc(
    dstId: string,
    recordId: string,
    type: RecordHistoryTypeEnum,
    showRecordHistory = true,
    limitDays?: number,
  ): Promise<string[]> {
    if (type == RecordHistoryTypeEnum.MODIFY_HISTORY && showRecordHistory) {
      const result:
        | {
            revisionHistory: string;
          }
        | undefined = await this.recordRepo.selectRevisionHistoryByDstIdAndRecordId(dstId, recordId);
      if (result && result.revisionHistory) {
        const revisions = result.revisionHistory.split(',');
        if (limitDays) {
          return this.datasheetChangesetService.getRecordModifyRevisions(dstId, revisions, limitDays);
        }
        return revisions;
      }
    }
    if (type == RecordHistoryTypeEnum.COMMENT) {
      return await this.recordCommentService.getRecordCommentRevisions(dstId, recordId);
    }
    if (type == RecordHistoryTypeEnum.ALL) {
      const modifyRevisions = await this.getRecordRevisionHistoryAsc(
        dstId,
        recordId,
        RecordHistoryTypeEnum.MODIFY_HISTORY,
        showRecordHistory,
        limitDays,
      );
      const commentRevisions = await this.recordCommentService.getRecordCommentRevisions(dstId, recordId);
      modifyRevisions.push(...commentRevisions);
      return modifyRevisions.sort((a, b) => Number(a) - Number(b));
    }
    return [];
  }
}
