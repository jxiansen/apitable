

package com.apitable.shared.component;

import static com.apitable.shared.listener.enums.FieldPermissionChangeEvent.FIELD_PERMISSION_DISABLE;

import com.apitable.control.infrastructure.ControlIdBuilder;
import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.listener.event.FieldPermissionEvent;
import com.apitable.shared.listener.event.FieldPermissionEvent.Arg;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 * <p>
 * Permission broadcast factory.
 * </p>
 *
 * @author Chambers
 */
@Component
public class SocketBroadcastFactory {

    public static SocketBroadcastFactory me() {
        return SpringContextHolder.getBean(SocketBroadcastFactory.class);
    }

    /**
     * field broadcast.
     *
     * @param memberName member name
     * @param controlIds control ids
     */
    public void fieldBroadcast(String memberName, List<String> controlIds) {
        controlIds.forEach(controlId -> {
            int index = controlId.indexOf(ControlIdBuilder.SYMBOL);
            Arg arg = Arg.builder().event(FIELD_PERMISSION_DISABLE)
                .datasheetId(controlId.substring(0, index))
                .fieldId(controlId.substring(index + 1))
                .operator(memberName).build();
            SpringContextHolder.getApplicationContext()
                .publishEvent(new FieldPermissionEvent(this, arg));
        });
    }
}
