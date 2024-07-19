

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Edit your own member information request parameters.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Edit your own member information request parameters")
public class UpdateMemberOpRo {

    @Schema(description = "Member Name", example = "Zhang San")
    @NotBlank(message = "Cannot be empty")
    @Size(max = 32, message = "The length cannot exceed 32 bits")
    private String memberName;
}
