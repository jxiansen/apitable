

package com.apitable.organization.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Template resolution result view.
 * </p>
 */
@Data
@Schema(description = "Template resolution result view、")
public class UploadParseResultVO {

    @Schema(description = "Total number of resolutions", example = "100")
    private Integer rowCount;

    @Schema(description = "Number of successful parsing", example = "198")
    private Integer successCount;

    @Schema(description = "Number of failed parsing", example = "2")
    private Integer errorCount;

    private List<ParseErrorRecordVO> errorList;
}
