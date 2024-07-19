

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Node sharing setting information view.
 * </p>
 */
@Data
@Schema(description = "Node sharing setting information view")
public class NodeShareSettingInfoVO {

    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @Schema(description = "Node Name", example = "This is a node")
    private String nodeName;

    @Schema(description = "Node icon", example = "smile")
    private String nodeIcon;

    @Schema(description = "Whether to enable share", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean shareOpened;

    @Schema(description = "Node share setting options")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private NodeShareSettingPropsVO props;

    @Schema(description = "Share unique code", example = "shrKsX1map5RfYO")
    private String shareId;

    @Schema(description = "Association Table")
    @JsonSerialize(nullsUsing = NullArraySerializer.class, using = NullArraySerializer.class)
    private List<String> linkNodes;

    @Schema(description = "Whether the node (including children) contains member fields",
        example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean containMemberFld;

    @Schema(description = "Open the sharer", example = "Zhang San")
    private String shareOpenOperator;

    @Schema(description = "Does the sharer have node permissions", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean operatorHasPermission;
}
