

package com.apitable.control.infrastructure.request;

import com.apitable.control.infrastructure.ControlType;
import java.util.List;

/**
 * filed control request factory.
 */
public class FieldControlRequestFactory implements ControlRequestFactory {

    @Override
    public ControlType getControlType() {
        return ControlType.DATASHEET_FIELD;
    }

    @Override
    public ControlRequest create(List<Long> units, List<String> controlIds) {
        return new FieldControlRequest(units, controlIds);
    }
}
