

package com.apitable.control.infrastructure.request;

import com.apitable.control.infrastructure.ControlRoleDict;

/**
 * control request api.
 *
 * @author Shawn Deng
 */
public interface ControlRequest extends ControlAttribute {

    /**
     * execute control request.
     *
     * @return control role dict
     */
    ControlRoleDict execute();
}
