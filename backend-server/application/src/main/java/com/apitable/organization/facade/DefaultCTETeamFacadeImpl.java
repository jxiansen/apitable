

package com.apitable.organization.facade;

import com.apitable.organization.dto.TeamCteInfo;
import com.apitable.organization.dto.TeamPathInfo;
import com.apitable.organization.mapper.TeamMapper;
import com.apitable.shared.util.CollectionUtil;
import com.apitable.shared.util.DBUtil;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Default CTE team facade implement class.
 */
public class DefaultCTETeamFacadeImpl extends AbstractTeamFacade {

    private final TeamMapper teamMapper;

    public DefaultCTETeamFacadeImpl(TeamMapper teamMapper) {
        this.teamMapper = teamMapper;
    }

    @Override
    public List<TeamPathInfo> getAllParentTeam(Collection<Long> teamIds) {
        if (teamIds.isEmpty()) {
            return new ArrayList<>();
        }
        return teamMapper.selectParentTeamTree(teamIds);
    }

    @Override
    public List<TeamCteInfo> getAllChildTeam(Collection<Long> teamIds) {
        List<TeamCteInfo> teams = DBUtil.batchSelectByFieldIn(teamIds,
            teamMapper::selectChildTeamTree);
        return CollectionUtil.distinctByProperty(teams, TeamCteInfo::getId);
    }
}
