

package com.apitable.base.service;

import com.apitable.workspace.ro.FieldPermissionChangeNotifyRo;
import com.apitable.workspace.ro.NodeShareDisableNotifyRo;
import java.util.List;

/**
 * RestTemplate service.
 */
public interface RestTemplateService {

    /**
     * turn off node sharing notifications.
     *
     * @param message request message
     */
    void disableNodeShareNotify(List<NodeShareDisableNotifyRo> message);

    /**
     * field permission change notification.
     *
     * @param message request message
     */
    void fieldPermissionChangeNotify(FieldPermissionChangeNotifyRo message);
}
