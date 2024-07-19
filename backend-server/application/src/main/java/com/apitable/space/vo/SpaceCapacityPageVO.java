

package com.apitable.space.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Space Capacity Page VO.
 */
@Data
@Schema(description = "Space Asset Capacity Detail")
public class SpaceCapacityPageVO {

    @Schema(description = "invited user info")
    private InviteUserInfo inviteUserInfo;

    @Schema(description = "quota source")
    private String quotaSource;

    @Schema(description = "quota")
    private String quota;

    @Schema(description = "expire date")
    private String expireDate;

}
