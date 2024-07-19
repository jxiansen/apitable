

package com.apitable.space.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * Space attachment resource request parameters.
 */
@Data
@Schema(description = "Space attachment resource request parameters")
public class SpaceAssetOpRo {

    @Schema(description = "Write the token set")
    private List<OpAssetRo> addToken = new ArrayList<>();

    @Schema(description = "Delete token collection")
    private List<OpAssetRo> removeToken = new ArrayList<>();

    @Schema(description = "DataSheet Node Id",
        requiredMode = RequiredMode.REQUIRED, example = "dst10")
    @NotBlank(message = "DataSheet ID cannot be empty")
    private String nodeId;

    /**
     * OpAssetRo.
     */
    @Getter
    @Setter
    @Schema(description = "Attachment resource request parameters")
    public static class OpAssetRo {

        @Schema(description = "Attachment token", requiredMode = RequiredMode.REQUIRED)
        @NotNull(message = "Token cannot be empty")
        private String token;

        @Schema(description = "Attachment name", requiredMode = RequiredMode.REQUIRED)
        @NotNull(message = "Attachment name cannot be empty")
        private String name;
    }

}
