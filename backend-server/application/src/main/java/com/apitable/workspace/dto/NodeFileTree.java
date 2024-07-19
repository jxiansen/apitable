

package com.apitable.workspace.dto;

import com.apitable.core.support.tree.Tree;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import lombok.Data;

/**
 * node file tree.
 */
@Data
public class NodeFileTree implements Tree {

    private String nodeId;

    private String parentId;

    private String nodeName;

    private String icon;

    private Integer type;

    private String cover;

    /**
     * data file name，map files in `/data`.
     */
    private String data;

    /**
     * child node.
     */
    private List<NodeFileTree> child;

    public NodeFileTree() {
    }

    /**
     * constructor.
     *
     * @param parentId parent id
     * @param nodeId   node id
     * @param name     node name
     * @param icon     icon
     * @param type     type
     * @param cover    cover
     * @param data     data
     */
    public NodeFileTree(String parentId, String nodeId, String name, String icon, Integer type,
                        String cover, String data) {
        this.parentId = parentId;
        this.nodeId = nodeId;
        this.nodeName = name;
        this.icon = icon;
        this.type = type;
        this.cover = cover;
        this.data = data;
    }

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
    public List getChildrenNodes() {
        return this.child;
    }

    @Override
    public void setChildrenNodes(List childrenNodes) {
        this.child = childrenNodes;
    }
}
