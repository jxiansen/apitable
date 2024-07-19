

package com.apitable.workspace.dto;

import lombok.Data;

/**
 * <p>
 * member information.
 * </p>
 */
@Data
public class MemberInfoDTO {

    private Long id;

    private Boolean isDeleted;

    private String uuid;
}
