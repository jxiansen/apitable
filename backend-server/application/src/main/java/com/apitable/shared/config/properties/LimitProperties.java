

package com.apitable.shared.config.properties;

import static com.apitable.shared.config.properties.LimitProperties.PREFIX_LIMIT;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;


/**
 * <p>
 * limitation properties.
 * </p>
 *
 * @author Chambers
 */
@Data
@ConfigurationProperties(prefix = PREFIX_LIMIT)
public class LimitProperties {

    public static final String PREFIX_LIMIT = "limit";

    /**
     * Maximum user space.
     */
    private Integer spaceMaxCount = 10;

    /**
     * Maximum file size of imported data table.
     */
    private Integer maxFileSize = 20 * 1024 * 1024;

    /**
     * Maximum number of columns in the number table.
     */
    private Integer maxColumnCount = 200;

    /**
     * Maximum Views.
     */
    @Deprecated
    private Integer viewMaxCount = 100;

    /**
     * Maximum number of templates.
     */
    private Integer templateMaxCount = 20;

    /**
     * Maximum loading numbers of member field in datasheet.
     */
    private Integer memberFieldMaxLoadCount = 10;

    /**
     * Maximum rows.
     */
    private Integer maxRowCount = 50000;

    /**
     * limitation of attachment(byte).
     */
    @Deprecated
    private Long spaceMemoryMaxSize = 1024 * 1024 * 1024L;

    /**
     * Maximum node number.
     */
    @Deprecated
    private Integer nodeMaxCount = 1000;

    /**
     * Maximum days of recycle bin.
     */
    @Deprecated
    private Integer rubbishRetainDay = 7;

    /**
     * Maximum member count of space.
     */
    @Deprecated
    private Integer memberMaxCount = 100;

    /**
     * Maximum admin number of space.
     */
    @Deprecated
    private Integer adminMaxCount = 20;

    /**
     * Maximum api usage of space.
     */
    @Deprecated
    private Integer apiUsageMaxCount = 10000;

    /**
     * Maximum dashboard numbers of space.
     */
    private Integer dsbWidgetMaxCount = 15;

    /**
     * Maximum robot number of space.
     */
    private Integer dstRobotMaxCount = 30;

    /**
     * max limit of trigger count.
     */
    private Integer automationTriggerCount = 3;

    /**
     * max limit of action count.
     */
    private Integer automationActionCount = 9;
}
