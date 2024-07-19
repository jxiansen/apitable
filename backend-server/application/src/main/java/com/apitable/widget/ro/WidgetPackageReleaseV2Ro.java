

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * widget release request.
 * </p>
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "widget release request")
public class WidgetPackageReleaseV2Ro extends WidgetPackageBaseV2Ro {

    @Schema(description = "space id", example = "spcyQkKp9XJEl")
    @NotBlank(message = "Space id not blank")
    private String spaceId;

    @Schema(description = "widget name", example = "{'zh-CN':'Chinese','en-US':'English'}")
    private String name;

    @Schema(description = "release note")
    private String releaseNote;

    @Schema(description = "is sandbox")
    private Boolean sandbox;

    @Schema(description = "install environment", example = "dashboard")
    private List<String> installEnv;

    @Schema(description = "runtime environment", example = "mobile")
    private List<String> runtimeEnv;

}