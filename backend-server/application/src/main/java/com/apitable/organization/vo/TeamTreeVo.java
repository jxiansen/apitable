

package com.apitable.organization.vo;

import com.apitable.core.support.tree.Tree;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Department Tree View.
 * </p>
 */
@Data
@Schema(description = "Department Tree View")
public class TeamTreeVo implements Tree {

    @Schema(description = "Department ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long teamId;

    @Schema(description = "Department name", example = "R&D Department")
    private String teamName;

    @Schema(description = "Parent ID, 0 if the parent is root", type = "java.lang.String",
        example = "0")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long parentId;

    @Deprecated
    @Schema(description = "Number of department members", example = "3", deprecated = true)
    private Integer memberCount;

    @Schema(description = "Sort No", example = "1")
    private Integer sequence;

    @Schema(description = "Whether there are sub teams.", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean hasChildren;

    @Schema(description = "Subsidiary department")
    private List<TeamTreeVo> children = new ArrayList<>();

    @JsonIgnore
    @Override
    public String getNodeId() {
        return String.valueOf(this.teamId);
    }

    @JsonIgnore
    @Override
    public String getNodeParentId() {
        return String.valueOf(this.parentId);
    }

    @JsonIgnore
    @Override
    public List<TeamTreeVo> getChildrenNodes() {
        return this.children;
    }

    @Override
    public void setChildrenNodes(List childrenNodes) {
        this.children = childrenNodes;
    }
}
