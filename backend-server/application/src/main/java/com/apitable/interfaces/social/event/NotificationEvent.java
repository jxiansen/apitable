

package com.apitable.interfaces.social.event;

import static com.apitable.interfaces.social.event.CallEventType.NOTIFICATION;

import com.apitable.player.ro.NotificationCreateRo;

/**
 * notification event.
 *
 * @author Shawn Deng
 */
public class NotificationEvent implements SocialEvent {

    private final NotificationCreateRo notificationMeta;

    public NotificationEvent(NotificationCreateRo notificationMeta) {
        this.notificationMeta = notificationMeta;
    }

    @Override
    public CallEventType getEventType() {
        return NOTIFICATION;
    }

    public NotificationCreateRo getNotificationMeta() {
        return notificationMeta;
    }
}
