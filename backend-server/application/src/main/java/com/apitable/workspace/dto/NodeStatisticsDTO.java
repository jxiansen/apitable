

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * node statistics dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NodeStatisticsDTO {

    private Integer nodeCount;

    private Long createdBy;

    private Long unitId;
}
