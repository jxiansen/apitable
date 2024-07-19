

package com.apitable.workspace.service.impl;

import com.apitable.control.infrastructure.permission.NodePermission;
import com.apitable.core.util.ExceptionUtil;
import com.apitable.workspace.entity.NodeShareSettingEntity;
import com.apitable.workspace.enums.NodeException;
import com.apitable.workspace.mapper.NodeShareSettingMapper;
import com.apitable.workspace.service.INodeShareSettingService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * node share setting service implement.
 */
@Service
@Slf4j
public class NodeShareSettingServiceImpl
    extends ServiceImpl<NodeShareSettingMapper, NodeShareSettingEntity>
    implements INodeShareSettingService {

    @Override
    public String getSpaceId(String shareId) {
        log.info("Get space id，shareId：{}", shareId);
        // verify that sharing exists
        String shareSpaceId = baseMapper.selectSpaceIdByShareId(shareId);
        ExceptionUtil.isNotNull(shareSpaceId, NodeException.SHARE_EXPIRE);
        return shareSpaceId;
    }

    @Override
    public Long getUpdatedByByShareId(String shareId) {
        log.info("Get the user ID of the last editor of the share {}", shareId);
        Long userId = baseMapper.selectUpdatedByByShareId(shareId);
        ExceptionUtil.isNotNull(userId, NodeException.SHARE_EXPIRE);
        return userId;
    }

    @Override
    public NodePermission getPermissionByShareId(String shareId) {
        NodeShareSettingEntity entity = baseMapper.selectAllowSaveAndAllowEditByShareId(shareId);
        ExceptionUtil.isNotNull(entity, NodeException.SHARE_EXPIRE);
        if (entity.getAllowEdit()) {
            return NodePermission.EDIT_NODE;
        }
        if (entity.getAllowSave()) {
            return NodePermission.EXPORT_NODE;
        }
        return NodePermission.READ_NODE;
    }
}
