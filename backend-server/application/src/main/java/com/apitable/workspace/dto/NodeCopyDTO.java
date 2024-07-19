

package com.apitable.workspace.dto;

import com.apitable.workspace.ro.MetaMapRo;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * node copy dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NodeCopyDTO {

    private MetaMapRo metaMapRo;

    private List<String> delFieldIds;

    private List<String> autoNumberFieldIds;

    private List<String> linkFieldIds;
}
