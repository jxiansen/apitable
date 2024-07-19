

package com.apitable.organization.dto;

import lombok.Data;

/**
 * team cte info.
 */
@Data
public class TeamCteInfo {

    /**
     * team id.
     */
    private Long id;

    /**
     * parent team id.
     */
    private Long parentId;
}

