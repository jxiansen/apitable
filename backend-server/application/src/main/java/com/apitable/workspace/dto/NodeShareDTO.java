

package com.apitable.workspace.dto;

import lombok.Data;

/**
 * node share DTO.
 */
@Data
public class NodeShareDTO {

    private String nodeId;

    private String shareId;

    private String spaceId;

    private Long operator;
}
