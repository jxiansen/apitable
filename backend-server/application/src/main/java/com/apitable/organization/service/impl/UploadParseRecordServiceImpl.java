

package com.apitable.organization.service.impl;

import com.apitable.organization.entity.AuditUploadParseRecordEntity;
import com.apitable.organization.mapper.AuditUploadParseRecordMapper;
import com.apitable.organization.service.IUploadParseRecordService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * audit upload parse record service implement.
 */
@Service
public class UploadParseRecordServiceImpl
    extends ServiceImpl<AuditUploadParseRecordMapper, AuditUploadParseRecordEntity>
    implements IUploadParseRecordService {

}
