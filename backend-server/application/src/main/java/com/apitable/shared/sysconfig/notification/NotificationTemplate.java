

package com.apitable.shared.sysconfig.notification;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * Notification Template.
 *
 * @author zoe
 */
@Data
public class NotificationTemplate {
    /**
     * id.
     */
    private String id;
    /**
     * canJump.
     */
    private boolean canJump;
    /**
     * to user tag.
     */
    private String toTag;
    /**
     * format string.
     */
    private String formatString;
    /**
     * whether to show in notification center.
     */
    @JsonProperty("is_notification")
    private boolean isNotification;
    /**
     * whether to send mobile notification.
     */
    @JsonProperty("is_mobile")
    private boolean isMobile;
    /**
     * whether to send browser notification.
     */
    @JsonProperty("is_browser")
    private boolean isBrowser;
    /**
     * is component.
     */
    @JsonProperty("is_component")
    private boolean isComponent;
    /**
     * whether to send email notification.
     */
    @JsonProperty("is_mail")
    private boolean isMail;
    /**
     * jump url.
     */
    private String url;
    /**
     * notification type.
     */
    private String notificationsType;
    /**
     * mail subject.
     */
    private String mailTemplateSubject;
    /**
     * frequency limit.
     */
    private Integer frequency;
    /**
     * redirect url.
     */
    private String redirectUrl;
}
