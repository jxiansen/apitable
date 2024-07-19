

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * <p>
 * ControlMemberDTO.
 * </p>
 *
 * @author Chambers
 */
@Data
@AllArgsConstructor
public class ControlMemberDTO {

    private Long memberId;

    private Boolean isAdmin;

    private Boolean isControlOwner;

    private String controlRoleTag;

    public ControlMemberDTO(Long memberId, String controlRoleTag) {
        this.memberId = memberId;
        this.controlRoleTag = controlRoleTag;
    }
}
