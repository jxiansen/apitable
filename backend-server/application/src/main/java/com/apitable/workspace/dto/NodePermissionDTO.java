

package com.apitable.workspace.dto;

import lombok.Data;

/**
 * node permission dto.
 */
@Data
public class NodePermissionDTO {

    private String nodeId;

    private String role;

    private Long unitId;
}
