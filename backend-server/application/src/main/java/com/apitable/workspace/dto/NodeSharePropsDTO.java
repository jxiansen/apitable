

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * node share props dto.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NodeSharePropsDTO {

    /**
     * only share it with others.
     */
    private Boolean onlyRead;

    /**
     * share with others for collaborative editing.
     */
    private Boolean canBeEdited;

    /**
     * share with others save as a copy.
     */
    private Boolean canBeStored;
}
