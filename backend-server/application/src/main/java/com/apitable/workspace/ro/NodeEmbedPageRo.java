

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Node embed page parameters.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Node embed page parameters")
public class NodeEmbedPageRo {

    @Schema(description = "url", requiredMode = Schema.RequiredMode.REQUIRED)
    private String url;

    @Schema(description = "Embed page type, figma et.")
    private String type;
}
