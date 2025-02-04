

package com.apitable.widget.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Widget package creation request parameters.
 * </p>
 */
@Data
@Schema(description = "Widget package creation request parameters")
public class WidgetPackageCreateRo {

    @Schema(description = "Custom Widget Package ID", example = "wpkAAA")
    @Pattern(regexp = PatternConstants.PACKAGE_ID,
        message = "Package ID format error."
            + " Please start with 'wpk' and add a combination of English letters"
            + " and numbers with a length of 10")
    private String packageId;

    @Schema(description = "Space ID", example = "spcyQkKp9XJEl")
    @NotBlank(message = "Space Id cannot be empty")
    private String spaceId;

    @Schema(description = "Widget name",
        example = "{'zh-CN':'Chinese','en-US':'English'}")
    @NotBlank(message = "Widget name cannot be empty")
    private String name;

    @Schema(description = "Package Type(0:Third party;1:Official)")
    @NotNull(message = "Component package type cannot be empty")
    private Integer packageType;

    @Schema(description = "0: Publish to the component store in the space station; "
        + "1: Publish to Global Store(Only package_ Only allowed if the type is 1)")
    @NotNull(message = "The component package publishing type cannot be empty")
    private Integer releaseType;

    @Schema(description = "Template or not")
    private Boolean isTemplate;

    @Schema(description = "Sandbox or not")
    private Boolean sandbox;

    @Schema(description = "Installation environment type", example = "dashboard")
    private List<String> installEnv;

    @Schema(description = "Operating environment type", example = "mobile")
    private List<String> runtimeEnv;

}
