

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Field structure request parameters of data in the datasheet record Record.
 * </p>
 */
@Schema(description = "Field structure request parameters of data in the datasheet record Record")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class RecordDataRo {

    @Schema(description = "Record value")
    private String text;

    @Schema(description = "Field Type")
    private Integer type;


}
