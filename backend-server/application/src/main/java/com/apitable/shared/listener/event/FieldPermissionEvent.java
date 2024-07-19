

package com.apitable.shared.listener.event;

import com.apitable.shared.listener.enums.FieldPermissionChangeEvent;
import com.apitable.workspace.ro.FieldControlProp;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

/**
 * <p>
 * Field Permission Event.
 * </p>
 *
 * @author Chambers
 */
@Getter
public class FieldPermissionEvent extends ApplicationEvent {

    private static final long serialVersionUID = 4958921396891987695L;

    private final Arg arg;

    public FieldPermissionEvent(Object source, Arg arg) {
        super(source);
        this.arg = arg;
    }

    /**
     * argument.
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder(toBuilder = true)
    public static class Arg {

        private FieldPermissionChangeEvent event;

        private String datasheetId;

        private String fieldId;

        private String uuid;

        private String operator;

        private Integer changeTime;

        private String role;

        private List<Long> changedUnitIds;

        private List<Long> delUnitIds;

        private FieldControlProp setting;

        private Boolean includeExtend;
    }

}
