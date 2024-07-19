

package com.apitable.shared.component.notification.subject;

import com.apitable.player.ro.NotificationCreateRo;

/**
 * center notify subject.
 */
public class CenterNotifySubject extends NotifySubject<Object> {

    @Override
    public void setContext(Object context) {
        this.context = context;
    }

    @Override
    public void send(NotificationCreateRo ro) {
        notifyObserver(ro);
    }
}
