

package com.apitable.space.service.impl;

import com.apitable.base.enums.DatabaseException;
import com.apitable.core.util.ExceptionUtil;
import com.apitable.space.entity.AuditInviteRecordEntity;
import com.apitable.space.mapper.AuditInviteRecordMapper;
import com.apitable.space.service.IAuditInviteRecordService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


/**
 * <p>
 * Audit Invite Record Service Implement Class.
 * </p>
 */
@Slf4j
@Service
public class AuditInviteRecordServiceImpl
    extends ServiceImpl<AuditInviteRecordMapper, AuditInviteRecordEntity>
    implements IAuditInviteRecordService {

    @Override
    public void save(String spaceId, Long inviter, Long accepter, Integer type) {
        AuditInviteRecordEntity entity = AuditInviteRecordEntity.builder()
            .spaceId(spaceId)
            .inviter(inviter)
            .accepter(accepter)
            .type(type)
            .build();
        boolean flag = this.save(entity);
        ExceptionUtil.isTrue(flag, DatabaseException.INSERT_ERROR);
    }
}
