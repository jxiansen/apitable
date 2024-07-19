

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Result view of data table information.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
@Schema(description = "Result view of data table information")
public class DataSheetInfoVo {

    @Schema(description = "Node Description")
    private String description;

    @Schema(description = "Whether the node is shared")
    private Boolean nodeShared;

    @Schema(description = "Whether the node permission is set")
    private Boolean nodePermitSet;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Digital meter icon", example = "smile")
    private String icon;

    @Schema(description = "Number table name", example = "E-commerce project workbench")
    private String name;

    @Schema(description = "Number table custom ID")
    private String id;

    @Schema(description = "Parent Node Id", example = "nod10")
    private String parentId;

    @Schema(description = "Version No", example = "0")
    private Long revision;

    @Schema(description = "Owner")
    private Long ownerId;

    @Schema(description = "Creator")
    private Long creatorId;

    @Schema(description = "Space id")
    private String spaceId;

    @Schema(description = "Role", example = "editor")
    private String role;

    @Schema(description = "Node Permissions")
    private NodePermissionView permissions;
}
