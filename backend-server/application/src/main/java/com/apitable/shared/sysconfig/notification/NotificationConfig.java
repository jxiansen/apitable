

package com.apitable.shared.sysconfig.notification;

import java.util.Map;
import lombok.Data;

/**
 * <p>
 * Notification Config.
 * </p>
 */
@Data
public class NotificationConfig {

    private TypesConfig types;

    private TemplatesConfig templates;

    private Map<String, SocialTemplate> socialTemplates;
}
