

package com.apitable.widget.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * widget submit request.
 * </p>
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "widget submit request")
public class WidgetPackageSubmitV2Ro extends WidgetPackageBaseV2Ro {

    @Schema(description = "widget wi")
    @NotBlank(message = "website address not blank")
    @Pattern(regexp = PatternConstants.URL_HTTP, message = "website address format error")
    private String website;

    @Schema(description = "widget's name", example = "{'zh-CN':'Chinese','en-US':'English'}")
    private String name;

    @Schema(description = "Release Notes")
    private String releaseNote;

    @Schema(description = "Sandbox or not")
    private Boolean sandbox;

    @Schema(description = "Installation environment type", example = "dashboard")
    private List<String> installEnv;

    @Schema(description = "Operating environment type", example = "mobile")
    private List<String> runtimeEnv;
}
