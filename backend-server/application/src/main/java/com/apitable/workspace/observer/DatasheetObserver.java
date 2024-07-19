

package com.apitable.workspace.observer;

import com.apitable.workspace.observer.remind.NotifyDataSheetMeta;

/**
 * datasheet observer.
 */
public interface DatasheetObserver {

    /**
     * send notify.
     *
     * @param meta notify meta.
     */
    void sendNotify(NotifyDataSheetMeta meta);
}
