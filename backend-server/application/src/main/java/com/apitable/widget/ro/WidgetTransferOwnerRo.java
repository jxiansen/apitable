

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Widget handover owner request parameters.
 * </p>
 */
@Data
@Schema(description = "Widget handover owner request parameters")
public class WidgetTransferOwnerRo {

    @NotBlank
    @Schema(description = "Widget Id")
    private String packageId;

    @NotNull(message = "New handover member ID cannot be empty")
    @Schema(description = "Handover Member Id")
    private Long transferMemberId;

}
