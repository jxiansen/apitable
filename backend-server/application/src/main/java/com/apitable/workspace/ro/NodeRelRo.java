

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Node Association Request Parameters.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Node Association Request Parameters")
public class NodeRelRo {

    @Schema(description = "Datasheet ID")
    private String datasheetId;

    @Schema(description = "View ID")
    private String viewId;

    @Schema(description = "View Name")
    private String viewName;

    @Schema(description = "Embed page info", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private NodeEmbedPageRo embedPage;

    public NodeRelRo(String viewId) {
        this.viewId = viewId;
    }
}
