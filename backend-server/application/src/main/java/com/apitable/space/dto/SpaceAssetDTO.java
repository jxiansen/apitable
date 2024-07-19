

package com.apitable.space.dto;

import lombok.Data;

/**
 * space asset dto.
 */
@Data
public class SpaceAssetDTO {

    private Long id;

    private Integer cite;

    private Integer type;

    private String nodeId;

    private Long assetId;

    private String assetChecksum;

    private Boolean isDeleted;
}
