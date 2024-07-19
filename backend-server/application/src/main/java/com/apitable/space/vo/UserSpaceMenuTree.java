

package com.apitable.space.vo;

import com.apitable.core.support.tree.Tree;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.List;
import java.util.Set;
import lombok.Data;

/**
 * <p>
 * Menu tree structure of member corresponding space.
 * </p>
 */
@Data
@Schema(description = "Space resource menu list")
public class UserSpaceMenuTree implements Tree, Serializable {

    private static final long serialVersionUID = 5569104968926431919L;

    @Schema(description = "Menu coding", example = "ManageOrg:ManageMember")
    private String menuCode;

    @Schema(description = "Menu Name", example = "Member Management")
    private String menuName;

    @Schema(description = "Menu No", example = "1")
    private Integer sequence;

    @Schema(description = "Parent menu code", example = "ManageOrg")
    private String parentCode;

    @Schema(description = "Operation permission resources corresponding to the menu",
        type = "List", example = "[\"ADD_MEMBER\",\"UPDATE_MEMBER\"]")
    private Set<String> operators;

    @Schema(description = "Submenu")
    private List<UserSpaceMenuTree> children;

    @JsonIgnore
    @Override
    public String getNodeId() {
        if (this.getMenuCode() == null) {
            return null;
        } else {
            return this.getMenuCode();
        }
    }

    @JsonIgnore
    @Override
    public String getNodeParentId() {
        if (this.parentCode == null) {
            return null;
        } else {
            return this.parentCode;
        }
    }

    @JsonIgnore
    @Override
    public List<UserSpaceMenuTree> getChildrenNodes() {
        if (this.children != null && this.children.size() > 0) {
            return children;
        }
        return null;
    }

    @Override
    public void setChildrenNodes(List childrenNodes) {
        this.children = childrenNodes;
    }
}
