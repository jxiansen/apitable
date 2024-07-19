

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * simple node info.
 */
@Data
@AllArgsConstructor
public class SimpleNodeInfo {

    private String nodeId;

    private String parentId;

    private Integer type;

    private Boolean extend;
}
