

package com.apitable.workspace.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Node sharing basic information view.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Node sharing basic information view")
public class ShareBaseInfoVo {

    @Schema(description = "Share unique code", example = "shrKsX1map5RfYO")
    private String shareId;
}
