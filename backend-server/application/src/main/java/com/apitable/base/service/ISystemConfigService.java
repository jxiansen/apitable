

package com.apitable.base.service;

import com.apitable.base.enums.SystemConfigType;
import com.apitable.base.model.SystemConfigDTO;
import java.util.List;

/**
 * system config service.
 */
public interface ISystemConfigService {

    /**
     * Get Wizard Config.
     *
     * @param lang Language
     * @return val
     */
    Object getWizardConfig(String lang);

    /**
     * Find Config.
     *
     * @param type configuration type
     * @param lang configuration language (optional)
     * @return config
     */
    String findConfig(SystemConfigType type, String lang);

    /**
     * Get system config DTO list.
     *
     * @param type configuration type
     * @return string list
     * @author Chambers
     */
    List<SystemConfigDTO> findSystemConfigDTOs(SystemConfigType type);

    /**
     * Save Or Update.
     *
     * @param userId    user id
     * @param type      configuration type
     * @param lang      configuration language
     * @param configVal configuration value
     */
    void saveOrUpdate(Long userId, SystemConfigType type, String lang,
                      String configVal);
}
