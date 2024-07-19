

package com.apitable.space.service;

import com.apitable.space.entity.AuditInviteRecordEntity;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * Audit Invite Record Service.
 * </p>
 */
public interface IAuditInviteRecordService extends IService<AuditInviteRecordEntity> {

    /**
     * Save audit invite record.
     *
     * @param spaceId  space id
     * @param inviter  member id of inviter
     * @param accepter member id of accepter
     * @param type     invite type
     */
    void save(String spaceId, Long inviter, Long accepter, Integer type);
}
