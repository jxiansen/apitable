

package com.apitable.workspace.observer;

/**
 * datasheet observable interface.
 */
public interface DatasheetObservable {

    /**
     * register observer.
     *
     * @param o observer
     */
    void registerObserver(DatasheetObserver o);

    /**
     * remove observer.
     *
     * @param o observer
     */
    void removeObserver(DatasheetObserver o);

    /**
     * notify observer.
     */
    void notifyObserver();

}
