

package com.apitable.shared.listener.event;

import cn.hutool.json.JSONObject;
import com.apitable.space.enums.AuditSpaceAction;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

/**
 * <p>
 * Space audit Event.
 * </p>
 *
 * @author Chambers
 */
public class AuditSpaceEvent extends ApplicationEvent {

    private final AuditSpaceArg arg;

    public AuditSpaceEvent(Object source, AuditSpaceArg arg) {
        super(source);
        this.arg = arg;
    }

    /**
     * space audit argument.
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder(toBuilder = true)
    public static class AuditSpaceArg {

        private AuditSpaceAction action;

        private Long userId;

        private String spaceId;

        private String nodeId;

        private String requestUserAgent;

        private String requestIp;

        private JSONObject info;
    }

    public AuditSpaceArg getArg() {
        return arg;
    }
}
