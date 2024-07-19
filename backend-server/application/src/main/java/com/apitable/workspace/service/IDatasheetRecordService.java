

package com.apitable.workspace.service;

import cn.hutool.json.JSONObject;
import com.apitable.workspace.dto.NodeCopyDTO;
import com.apitable.workspace.entity.DatasheetRecordEntity;
import com.apitable.workspace.model.Datasheet;
import com.apitable.workspace.vo.DatasheetRecordMapVo;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.Collection;
import java.util.List;

/**
 * datasheet record service.
 */
public interface IDatasheetRecordService extends IService<DatasheetRecordEntity> {

    /**
     * save batch.
     *
     * @param entities records
     */
    void batchSave(List<DatasheetRecordEntity> entities);

    /**
     * bulk create record.
     *
     * @param userId  user id
     * @param dstId   dst id
     * @param records record list
     * @return record list
     */
    Datasheet.Records createRecords(Long userId, String dstId, Datasheet.Records records);

    /**
     * custom save batch.
     *
     * @param userId    user id
     * @param recordMap json format: record - field
     * @param dstId     datasheet id
     */
    void saveBatch(Long userId, JSONObject recordMap, String dstId);

    /**
     * copy datasheet records.
     *
     * @param userId            user id
     * @param sourceDatasheetId source datasheet id
     * @param targetDatasheetId target datasheet id
     * @param nodeCopyDTO       node replication DTO
     * @param retain            reserved RecordMeta
     */
    void copyRecords(Long userId, String sourceDatasheetId, String targetDatasheetId,
                     NodeCopyDTO nodeCopyDTO,
                     boolean retain);

    /**
     * copy data from a column to a new column.
     *
     * @param dstId         datasheet id
     * @param sourceFieldId source field id
     * @param targetFieldId target field id
     */
    void copyFieldData(String dstId, String sourceFieldId, String targetFieldId);

    /**
     * Deletes the data of the specified field in the number table record.
     *
     * @param dstId       datasheet id
     * @param delFieldIds deleted field id list
     * @param saveDb      whether save to database
     * @return map
     */
    DatasheetRecordMapVo delFieldData(String dstId, List<String> delFieldIds, boolean saveDb);

    /**
     * get record map by datasheet id.
     *
     * @param dstIds datasheet ids
     * @return recordMapVo
     */
    List<DatasheetRecordMapVo> findMapByDstIds(Collection<String> dstIds);
}
