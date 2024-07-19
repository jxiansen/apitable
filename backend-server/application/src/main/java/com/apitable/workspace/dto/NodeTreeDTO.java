

package com.apitable.workspace.dto;

import lombok.Data;

/**
 * <p>
 * NodeTreeDTO.
 * </p>
 *
 * @author Chambers
 */
@Data
public class NodeTreeDTO {

    private String nodeId;

    private Integer type;

    private String parentId;

    private String preNodeId;
}
