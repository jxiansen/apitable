

package com.apitable.control.infrastructure.request;

import com.apitable.control.infrastructure.ControlType;
import java.util.List;

/**
 * node control request factory.
 */
public class NodeControlRequestFactory implements ControlRequestFactory {

    @Override
    public ControlType getControlType() {
        return ControlType.NODE;
    }

    @Override
    public ControlRequest create(List<Long> units, List<String> controlIds) {
        return new NodeControlRequest(units, controlIds);
    }
}
