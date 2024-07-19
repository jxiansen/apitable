

package com.apitable.workspace.ro;

import com.apitable.shared.listener.enums.FieldPermissionChangeEvent;
import com.apitable.workspace.vo.FieldPermission;
import com.apitable.workspace.vo.FieldRoleSetting;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Field Permission Change Notice Request Parameters.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class FieldPermissionChangeNotifyRo {

    private FieldPermissionChangeEvent event;

    private String datasheetId;

    private String fieldId;

    private String operator;

    private Long changeTime;

    private FieldRoleSetting setting;

    private List<ChangeObject> changes;

    /**
     * change object class.
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ChangeObject {

        private List<String> uuids;

        private String role;

        private FieldPermission permission;
    }

}
