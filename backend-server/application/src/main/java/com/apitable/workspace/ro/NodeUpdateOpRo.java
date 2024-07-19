

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

/**
 * Node Edit Request Parameters.
 */
@Data
@Schema(description = "Node Edit Request Parameters")
public class NodeUpdateOpRo {

    @Schema(description = "Name", example = "This is a new node name")
    @Size(max = 100, message = "The name length cannot exceed 100 bits")
    private String nodeName;

    @Schema(description = "Icon", example = ":smile")
    private String icon;

    @Schema(description = "Cover, Empty（'null' OR 'undefined'）", example = "space/2020/5/19/..")
    private String cover;

    @Schema(description = "Whether to display the recorded history", example = "1")
    @Range(min = 0, max = 1, message = "Display record history can only be 0/1")
    private Integer showRecordHistory;

    @Schema(description = "Embed page info", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private NodeEmbedPageRo embedPage;
}
