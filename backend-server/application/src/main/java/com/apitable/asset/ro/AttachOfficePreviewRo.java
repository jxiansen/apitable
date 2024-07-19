

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Attachment preview request parameter ro.
 * </p>
 */
@Data
@Schema(description = "Attachment preview request parameter ro")
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class AttachOfficePreviewRo {

    /**
     * Cloud file storage path.
     */
    @NotBlank(message = "Cloud file storage path")
    @Schema(description = "Cloud file name/key", example = "space/2020/03/27/1243592950910349313")
    private String token;


    @NotBlank(message = "Source file name and suffix of cloud files")
    @Schema(description = "Source file name and suffix of cloud files",
        example = "Leida Team Books.xls")
    private String attname;

}
