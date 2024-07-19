

package com.apitable.space.dto;

import lombok.Data;

/**
 * node asset dto.
 */
@Data
public class NodeAssetDTO {

    private String nodeId;

    private Long assetId;

    private String checksum;

    private Integer cite;

    private Integer fileSize;

    private Integer type;

    private String sourceName;

    private Boolean isTemplate;
}
