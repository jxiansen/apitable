

package com.apitable.workspace.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * Create Datasheet Vo.
 */
@Data
@Schema(description = "Create DataSheet View")
@Builder
public class CreateDatasheetVo {

    @Schema(description = "DataSheet ID", example = "dstfCEKoPjXSJ8jdSj")
    private String datasheetId;

    @Schema(description = "Folder ID", example = "fodn173Q0e8nC")
    private String folderId;

    @Schema(description = "Previous node ID", example = "dstfCEKoPjXSJ8jdSj")
    private String preNodeId;

    @Schema(description = "Create time", example = "24342423342")
    private Long createdAt;

    @JsonIgnoreProperties
    private String nodeId;

    @JsonIgnoreProperties
    private String parentId;

}
