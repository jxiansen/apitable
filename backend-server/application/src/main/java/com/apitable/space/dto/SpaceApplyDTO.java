

package com.apitable.space.dto;

import lombok.Data;

/**
 * space apply dto.
 */
@Data
public class SpaceApplyDTO {

    private Integer notifyApplyStatus;

    private Long applyId;

    private String spaceId;

    private Integer status;

    private Long createdBy;
}
