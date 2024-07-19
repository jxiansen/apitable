

package com.apitable.organization.dto;

import lombok.Builder;
import lombok.Data;

/**
 * unit role info dto.
 */
@Data
@Builder(toBuilder = true)
public class UnitRoleInfoDTO {

    private Long roleId;

    private String unitId;

    private String roleName;

    private Integer position;

}
