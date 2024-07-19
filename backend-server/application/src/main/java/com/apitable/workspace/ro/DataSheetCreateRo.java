

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Data table creation request parameter.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
@Schema(description = "Data table creation request parameter")
public class DataSheetCreateRo {

    @Schema(description = "Meter Node Id", example = "nod16fq165m6c")
    private String nodeId;

    @Schema(description = "Number table name", example = "E-commerce project workbench")
    private String name;

    @Schema(description = "Space id", example = "spczJrh2i3tLW")
    private String spaceId;

}
