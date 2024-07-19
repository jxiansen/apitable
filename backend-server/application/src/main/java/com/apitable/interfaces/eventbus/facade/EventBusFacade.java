

package com.apitable.interfaces.eventbus.facade;

import com.apitable.interfaces.eventbus.model.EventBusEvent;

/**
 * event bus facade.
 */
public interface EventBusFacade {

    /**
     * event bus publish.
     *
     * @param event event
     */
    void onEvent(EventBusEvent event);
}
