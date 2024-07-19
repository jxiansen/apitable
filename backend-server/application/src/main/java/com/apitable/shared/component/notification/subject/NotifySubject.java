

package com.apitable.shared.component.notification.subject;

import com.apitable.player.ro.NotificationCreateRo;
import com.apitable.shared.component.notification.observer.NotifyObserver;
import java.util.Vector;

/**
 * notify subject.
 *
 * @param <T> context
 */
public abstract class NotifySubject<T> {

    /**
     * send notification.
     */
    public abstract void send(NotificationCreateRo ro);

    public abstract void setContext(T context);

    protected T context;

    private final Vector<NotifyObserver> observers = new Vector<>();

    /**
     * add observer.
     *
     * @param observer observer
     */
    public void addObserver(NotifyObserver observer) {
        if (!observers.contains(observer)) {
            observers.add(observer);
        }
    }

    public void delObserver(NotifyObserver observer) {
        observers.remove(observer);
    }

    /**
     * notify observer processing.
     *
     * @param ro notification parameters
     */
    protected void notifyObserver(NotificationCreateRo ro) {
        for (NotifyObserver observer : observers) {
            if (observer.isNotify(context)) {
                observer.notify(context, ro);
            }
        }
    }
}
