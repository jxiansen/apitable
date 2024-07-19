

package com.apitable.control.infrastructure.request;


import com.apitable.control.infrastructure.ControlType;
import java.util.List;

/**
 * control attribute definition.
 *
 * @author Shawn Deng
 */
public interface ControlAttribute {

    /**
     * get unit id of control.
     *
     * @return unit id of organization
     */
    List<Long> getUnits();

    /**
     * get control id list.
     *
     * @return control id list
     */
    List<String> getControlIds();

    /**
     * get control type.
     *
     * @return control type
     */
    ControlType getType();
}
