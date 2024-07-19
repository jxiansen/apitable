

package com.apitable.workspace.vo;

import com.apitable.core.support.tree.Tree;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Node Tree View.
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "Node Tree View")
public class NodeInfoTreeVo extends NodeInfoVo implements Tree {

    @Schema(description = "Child Node List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<NodeInfoTreeVo> children;

    @JsonIgnore
    @Override
    public String getNodeParentId() {
        return getParentId();
    }

    @JsonIgnore
    @Override
    public List<NodeInfoTreeVo> getChildrenNodes() {
        return this.children;
    }

    @Override
    public void setChildrenNodes(List childrenNodes) {
        this.children = childrenNodes;
    }
}
