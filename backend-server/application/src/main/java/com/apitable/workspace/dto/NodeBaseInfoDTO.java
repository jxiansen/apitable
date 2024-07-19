

package com.apitable.workspace.dto;

import lombok.Data;

/**
 * Node base info dto.
 */
@Data
public class NodeBaseInfoDTO {

    private String nodeId;

    private String nodeName;

    private String icon;

    private String parentId;

    private Integer type;
}
