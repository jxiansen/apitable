

package com.apitable.organization.facade;

import com.apitable.organization.dto.TeamCteInfo;
import com.apitable.organization.dto.TeamPathInfo;
import java.util.Collection;
import java.util.List;

/**
 * Team Facade.
 *
 * @author Chambers
 */
public interface TeamFacade {

    /**
     * Get all parent team id (contain self).
     *
     * @param teamId    team table id
     * @return parent team id list
     * @author Chambers
     */
    List<Long> getAllParentTeamIds(Long teamId);

    /**
     * Get all parent team id (contain self).
     *
     * @param teamIds   team table ids
     * @return parent team id list
     * @author Chambers
     */
    List<Long> getAllParentTeamIds(Collection<Long> teamIds);

    /**
     * Get all parent team (contain self).
     *
     * @param teamIds   team table ids
     * @return TeamPathInfo List
     * @author Chambers
     */
    List<TeamPathInfo> getAllParentTeam(Collection<Long> teamIds);

    /**
     * Get all child team (contain self).
     *
     * @param teamIds   team table ids
     * @return TeamCteInfo List
     * @author Chambers
     */
    List<TeamCteInfo> getAllChildTeam(Collection<Long> teamIds);

}
