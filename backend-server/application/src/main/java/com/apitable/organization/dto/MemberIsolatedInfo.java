

package com.apitable.organization.dto;

import java.util.List;
import lombok.Data;

/**
 * member isolated info.
 */
@Data
public class MemberIsolatedInfo {

    /**
     * whether the member is isolated.
     */
    private boolean isolated;

    /**
     * the member's team ids.
     */
    private List<Long> teamIds;
}
