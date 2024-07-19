

package com.apitable.workspace.vo;

import com.apitable.core.support.tree.Tree;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * View of the number of shared nodes.
 * </p>
 */
@Data
@Schema(description = "View of the number of shared nodes")
public class NodeShareTree implements Tree {

    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @Schema(description = "Node Name", example = "Node Name")
    private String nodeName;

    @Schema(description = "Node icon", example = ":smile")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String icon;

    @JsonIgnore
    private String parentId;

    @JsonIgnore
    private String preNodeId;

    @JsonIgnore
    private String cover;

    @Schema(description = "Node extra")
    private String extra;

    @Schema(description = "Node Type[1:Folder,2:Datasheet]", example = "1")
    private Integer type;

    @Schema(description = "node private", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean nodePrivate;

    @Schema(description = "Child node")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<NodeShareTree> children;

    @Override
    public String getNodeId() {
        return this.nodeId;
    }

    @JsonIgnore
    @Override
    public String getNodeParentId() {
        return this.parentId;
    }

    @JsonIgnore
    @Override
    public List<NodeShareTree> getChildrenNodes() {
        return this.children;
    }

    @Override
    public void setChildrenNodes(List childrenNodes) {
        this.children = childrenNodes;
    }
}
