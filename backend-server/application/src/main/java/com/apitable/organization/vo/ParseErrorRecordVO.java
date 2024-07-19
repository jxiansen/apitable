

package com.apitable.organization.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Resolution Failure Details View.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Resolution Failure Details View")
public class ParseErrorRecordVO {

    @Deprecated
    @Schema(description = "Number of rows", example = "Line 6")
    private String rowIndex;

    @Schema(description = "Row index", example = "1")
    private Integer rowNumber;

    @Schema(description = "Member nickname", example = "Zhang San")
    private String name;

    @Schema(description = "Email", example = "Line 6")
    private String email;

    @Schema(description = "Number of rows", example = "Line 6")
    private String team;

    @Schema(description = "Error Details", example = "Email not filled")
    private String message;
}
