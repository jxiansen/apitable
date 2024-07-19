

package com.apitable.organization.mapper;

import com.apitable.organization.entity.AuditUploadParseRecordEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Audit Upload Parse Record Mapper.
 * </p>
 */
public interface AuditUploadParseRecordMapper extends BaseMapper<AuditUploadParseRecordEntity> {

    /**
     * Find the latest analysis result of uploading address book template.
     *
     * @param spaceId space id
     * @return UploadParseRecordEntity
     */
    AuditUploadParseRecordEntity selectLastBySpaceId(@Param("spaceId") String spaceId);
}
