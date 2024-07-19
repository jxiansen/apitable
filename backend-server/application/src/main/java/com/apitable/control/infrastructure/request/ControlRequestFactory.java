

package com.apitable.control.infrastructure.request;

import com.apitable.control.infrastructure.ControlType;
import java.util.List;

/**
 * control request factory.
 */
public interface ControlRequestFactory {

    /**
     * control type.
     *
     * @return control type.
     */
    ControlType getControlType();

    /**
     * create control request.
     *
     * @param units      units.
     * @param controlIds control ids.
     * @return control request.
     */
    ControlRequest create(List<Long> units, List<String> controlIds);
}
