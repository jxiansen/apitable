

package com.apitable.workspace.dto;

import com.apitable.workspace.ro.SnapshotMapRo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Bundle data file.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NodeDataFile {

    private String description;

    private SnapshotMapRo snapshot;
}
