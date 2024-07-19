

package com.apitable.control.infrastructure;

import com.apitable.control.infrastructure.request.ControlRequest;

/**
 * control request wrapper.
 *
 * @author Shawn Deng
 */
public interface ControlRequestWrapper {

    /**
     * wrapper request.
     *
     * @param request ControlRequest
     */
    void doWrapper(ControlRequest request);
}
