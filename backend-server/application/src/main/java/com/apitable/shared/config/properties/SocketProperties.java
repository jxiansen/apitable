

package com.apitable.shared.config.properties;

import static com.apitable.shared.config.properties.SocketProperties.PREFIX;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * <p>
 * Socket properties.
 * </p>
 *
 * @author Chambers
 */
@Data
@ConfigurationProperties(prefix = PREFIX)
public class SocketProperties {

    public static final String PREFIX = "socket";

    private String domain;

    private String token = "FutureIsComing";

    private String disableNodeShareNotify = "/node/disableShare";

    private String fieldPermissionChangeNotify = "/datasheet/field/permission/change";

}
