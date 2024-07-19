

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Data;

/**
 * Resource upload completion notification RO.
 */
@Data
@Schema(description = "Resource upload completion notification RO")
public class AssetUploadNotifyRO {

    @Schema(description = "Asset Type(0:user avatar;1:space logo;2:datasheet;"
        + " 3:cover image;4:node description;5:document)",
        example = "0", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Type cannot be null")
    private Integer type;

    @Schema(description = "List of resource names",
        example = "[\"spc10/2019/12/10/159\", \"spc10/2019/12/10/168\"]")
    private List<String> resourceKeys;

}
