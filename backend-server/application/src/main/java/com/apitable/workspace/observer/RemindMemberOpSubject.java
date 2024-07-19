

package com.apitable.workspace.observer;

import com.apitable.workspace.observer.remind.NotifyDataSheetMeta;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * remind observer, space @members, commenting.
 * </p>
 */
public class RemindMemberOpSubject implements DatasheetObservable {

    private final List<DatasheetObserver> observers;

    private NotifyDataSheetMeta meta;

    public RemindMemberOpSubject() {
        observers = new ArrayList<>();
    }

    @Override
    public void registerObserver(DatasheetObserver o) {
        if (null != o && !observers.contains(o)) {
            observers.add(o);
        }
    }

    @Override
    public void removeObserver(DatasheetObserver o) {
        if (null != o && !observers.isEmpty()) {
            observers.remove(o);
        }
    }

    @Override
    public void notifyObserver() {
        for (DatasheetObserver observer : observers) {
            observer.sendNotify(meta);
        }
    }

    /**
     * send notify.
     *
     * @param meta notify meta
     */
    public void sendNotify(NotifyDataSheetMeta meta) {
        this.meta = meta;
        // send message
        this.notifyObserver();
    }

}
