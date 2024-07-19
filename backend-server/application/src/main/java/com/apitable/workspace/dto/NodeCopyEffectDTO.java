

package com.apitable.workspace.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 * node copy effect dto.
 */
@Data
@Builder
public class NodeCopyEffectDTO {

    private String nodeId;

    private String copyNodeId;

    private List<String> linkFieldIds;
}
