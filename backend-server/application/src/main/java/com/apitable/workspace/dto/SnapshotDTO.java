

package com.apitable.workspace.dto;

import com.apitable.workspace.ro.SnapshotMapRo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * snapshot dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SnapshotDTO {

    private String dstId;

    private SnapshotMapRo snapshot;
}
