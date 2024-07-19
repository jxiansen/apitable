

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Number of nodes vo.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Number of nodes vo")
public class NodeCountVo {

    @Schema(description = "Number of folders", example = "5")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer folderNumber;

    @Schema(description = "Number of documents", example = "20")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer fileNumber;

}
