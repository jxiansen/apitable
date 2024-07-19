

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * create node dto.
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class CreateNodeDto {

    private String spaceId;

    private String parentId;

    private String nodeName;

    private Integer type;

    private String preNodeId;

    private String newNodeId;

    private String icon;

    private String cover;

    private String extra;

    private Long unitId;
}
