

package com.apitable.control.service;

import com.apitable.control.entity.ControlSettingEntity;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * Control setting service.
 */
public interface IControlSettingService extends IService<ControlSettingEntity> {

    /**
     * Get control unit settings.
     *
     * @param controlId Control unit ID
     * @return ControlSettingEntity
     */
    ControlSettingEntity getByControlId(String controlId);

    /**
     * Batch Access Permission Control Unit Settings.
     *
     * @param controlIds List of control unit IDs
     * @return ControlSettingEntities
     */
    List<ControlSettingEntity> getBatchByControlIds(List<String> controlIds);

    /**
     * Create permission control unit settings.
     *
     * @param userId    User ID
     * @param controlId Control unit ID
     */
    void create(Long userId, String controlId);

    /**
     * Delete the specified control unit settings.
     *
     * @param controlIds Control unit ID set
     */
    void removeByControlIds(Long userId, List<String> controlIds);
}
