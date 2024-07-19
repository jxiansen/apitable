

package com.apitable.organization.facade;

import com.apitable.organization.dto.TeamPathInfo;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Abstract team facade.
 */
public abstract class AbstractTeamFacade implements TeamFacade {

    public List<Long> getAllParentTeamIds(Long teamId) {
        return this.getAllParentTeamIds(Collections.singletonList(teamId));
    }

    public List<Long> getAllParentTeamIds(Collection<Long> teamIds) {
        List<TeamPathInfo> teams = this.getAllParentTeam(teamIds);
        return teams.stream().map(TeamPathInfo::getId).collect(Collectors.toList());
    }
}
