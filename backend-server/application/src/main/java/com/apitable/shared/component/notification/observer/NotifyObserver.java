

package com.apitable.shared.component.notification.observer;

import com.apitable.player.ro.NotificationCreateRo;
import java.util.List;
import java.util.Map;

/**
 * notify observer.
 *
 * @param <M> template
 * @param <T> context
 */
public interface NotifyObserver<M, T> {

    boolean isNotify(T context);

    M getTemplate(String templateId);

    <A> A renderTemplate(T context, NotificationCreateRo ro);

    Map<String, Object> bindingMap(NotificationCreateRo ro);

    List<?> toUser(NotificationCreateRo ro);

    void notify(T context, NotificationCreateRo ro);

    void notify(T context, List<NotificationCreateRo> roList);
}
