

package com.apitable.workspace.service;

import com.apitable.control.infrastructure.permission.NodePermission;
import com.apitable.workspace.entity.NodeShareSettingEntity;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * share setting class.
 */
public interface INodeShareSettingService extends IService<NodeShareSettingEntity> {

    /**
     * get space id.
     *
     * @param shareId share id
     * @return spaceId
     */
    String getSpaceId(String shareId);

    /**
     * get updated by share id.
     *
     * @param shareId shareId
     * @return the user id of the last editor
     */
    Long getUpdatedByByShareId(String shareId);

    /**
     * get share permission.
     *
     * @param shareId share id
     * @return NodePermission
     */
    NodePermission getPermissionByShareId(String shareId);
}
