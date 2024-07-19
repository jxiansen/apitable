

package com.apitable.internal.service;

import com.apitable.control.infrastructure.permission.NodePermission;
import com.apitable.workspace.vo.DatasheetPermissionView;
import java.util.List;
import java.util.function.Consumer;

/**
 * Permission Service.
 */
public interface IPermissionService {

    /**
     * Get data table permission view information.
     *
     * @param userId  user id
     * @param nodeIds node id list
     * @param shareId share id
     * @return DatasheetPermissionViews
     */
    List<DatasheetPermissionView> getDatasheetPermissionView(Long userId, List<String> nodeIds,
                                                             String shareId);

    /**
     * check member permission.
     *
     * @param resourceId resource id
     * @param permission node permission
     * @param shareId    share id
     */
    void checkPermissionBySessionOrShare(String resourceId, String shareId,
                                         NodePermission permission, Consumer<Boolean> consumer);
}
