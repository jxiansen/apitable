

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Node share information view.
 * </p>
 */
@Data
@Schema(description = "Node share information view")
public class NodeShareInfoVO {

    @Schema(description = "Share Unique ID", example = "shrKsX1map5RfYO")
    private String shareId;

    @Schema(description = "Space ID", example = "spceDumyiMKU2")
    private String spaceId;

    @Schema(description = "Space name", example = "space")
    private String spaceName;

    @Schema(description = "Shared node tree")
    private NodeShareTree shareNodeTree;

    @Schema(description = "Allow others to deposit", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowSaved;

    @Schema(description = "Allow others to edit", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowEdit;

    @Schema(description = "Whether to allow others to apply for joining the space",
        example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowApply;

    @Schema(description = "Whether to allow others to copy data outside the station",
        example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowCopyDataToExternal;

    @Schema(description = "Allow others to download attachments", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowDownloadAttachment;

    @Schema(description = "Last Modified By", example = "Zhang San")
    private String lastModifiedBy;

    @Schema(description = "Head portrait address",
        example = "http://wwww.apitable.com/2019/11/12/17123187253.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String lastModifiedAvatar;

    @Schema(description = "Login or not", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean hasLogin;

    @Schema(description = "Whether to open「View manual save」Experimental function",
        example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean featureViewManualSave;

    @Schema(description = "is deleted", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isDeleted;
}
