

package com.apitable.shared.listener.event;

import com.apitable.player.entity.PlayerNotificationEntity;
import java.util.List;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

/**
 * <p>
 * Notification Created Event.
 * </p>
 *
 * @author zoe zheng
 */
@Getter
public class NotificationCreateEvent extends ApplicationEvent {

    private static final long serialVersionUID = 3860684909645043466L;

    private final List<PlayerNotificationEntity> entityList;

    public NotificationCreateEvent(Object source, List<PlayerNotificationEntity> entities) {
        super(source);
        this.entityList = entities;
    }

}
