

package com.apitable.control.service;

import com.apitable.control.entity.ControlEntity;
import com.apitable.control.infrastructure.ControlType;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;
import java.util.function.Consumer;

/**
 * Control service.
 */
public interface IControlService extends IService<ControlEntity> {

    /**
     * Get space id.
     *
     * @param controlId Control Unit ID
     * @return spaceId
     * @author Chambers
     */
    String getSpaceIdByControlId(String controlId);

    /**
     * Query control unit.
     *
     * @param controlId Control unit ID
     * @return ControlEntity
     */
    ControlEntity getByControlId(String controlId);

    /**
     * Check the status of authority control unit.
     *
     * @param controlId Control unit ID
     * @param consumer  Custom consumer
     */
    void checkControlStatus(String controlId, Consumer<Boolean> consumer);

    /**
     * Create permission control unit.
     *
     * @param userId      User ID
     * @param spaceId     Space ID
     * @param controlId   Control unit ID
     * @param controlType Control unit type
     */
    void create(Long userId, String spaceId, String controlId, ControlType controlType);

    /**
     * Delete information about the control unit.
     *
     * @param controlIds Control unit ID set
     * @param delSetting Deleting control unit settings
     */
    void removeControl(Long userId, List<String> controlIds, boolean delSetting);

    /**
     * Get the permission control unit ID.
     *
     * @param prefix Control unit ID prefix
     * @param type   Control unit type
     * @return Control unit ID
     */
    List<String> getControlIdByControlIdPrefixAndType(String prefix, Integer type);

    /**
     * Get the existing control unit ID.
     *
     * @param controlIds Control unit ID set
     * @return Control unit ID
     */
    List<String> getExistedControlId(List<String> controlIds);

    /**
     * Get the member ID of the authority control unit creator.
     *
     * @param controlId Control unit ID
     * @return memberId
     */
    Long getOwnerMemberId(String controlId);
}
