

package com.apitable.base.model;

import lombok.Data;

/**
 * System Config DTO.
 *
 * @author Chambers
 */
@Data
public class SystemConfigDTO {

    /**
     * id.
     */
    private Long id;

    /**
     * i18n key.
     */
    private String i18nName;

    /**
     * Configuration value.
     */
    private String configMap;
}
