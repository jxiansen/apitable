

package com.apitable.shared.config.properties;

import static com.apitable.shared.config.properties.EmailSendProperties.PREFIX;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * <p>
 * email send properties.
 * </p>
 *
 * @author Shawn Deng
 */
@Data
@ConfigurationProperties(prefix = PREFIX)
public class EmailSendProperties {

    public static final String PREFIX = "email";

    /**
     * Signature of all messages.
     */
    private String personal;

    /**
     * From email of all messages.
     */
    private String from;
}
