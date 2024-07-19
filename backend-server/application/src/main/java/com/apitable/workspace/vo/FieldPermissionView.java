

package com.apitable.workspace.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Field Permission View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Field Permission View")
public class FieldPermissionView {

    @Schema(description = "Node ID", example = "dstGxznHFXf9pvF1LZ")
    private String nodeId;

    @Schema(description = "Datasheet ID（Node ID / Source Datasheet node ID）",
        example = "dstGxznHFXf9pvF1LZ")
    private String datasheetId;

    @Schema(description = "Datasheet field permission information", type = "java.util.Map")
    private Map<String, FieldPermissionInfo> fieldPermissionMap;
}
