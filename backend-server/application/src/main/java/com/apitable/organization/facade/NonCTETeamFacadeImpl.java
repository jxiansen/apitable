

package com.apitable.organization.facade;

import com.apitable.organization.dto.TeamBaseInfoDTO;
import com.apitable.organization.dto.TeamCteInfo;
import com.apitable.organization.dto.TeamPathInfo;
import com.apitable.organization.mapper.TeamMapper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Non-CTE team facade implement class.
 */
public class NonCTETeamFacadeImpl extends AbstractTeamFacade {

    private final TeamMapper teamMapper;

    public NonCTETeamFacadeImpl(TeamMapper teamMapper) {
        this.teamMapper = teamMapper;
    }

    @Override
    public List<TeamPathInfo> getAllParentTeam(Collection<Long> teamIds) {
        Map<Long, TeamPathInfo> teamIdToTeamMap = new HashMap<>();
        Set<Long> parentIds = new HashSet<>(teamIds);
        while (!parentIds.isEmpty()) {
            List<TeamBaseInfoDTO> teams =
                teamMapper.selectBaseInfoDTOByIds(parentIds);
            parentIds = new HashSet<>();
            for (TeamBaseInfoDTO team : teams) {
                if (teamIdToTeamMap.containsKey(team.getId())) {
                    continue;
                }
                if (!team.getParentId().equals(0L)) {
                    parentIds.add(team.getParentId());
                }
                TeamPathInfo info = new TeamPathInfo();
                info.setId(team.getId());
                info.setParentId(team.getParentId());
                info.setTeamName(team.getTeamName());
                teamIdToTeamMap.put(team.getId(), info);
            }
        }
        return new ArrayList<>(teamIdToTeamMap.values());
    }

    @Override
    public List<TeamCteInfo> getAllChildTeam(Collection<Long> teamIds) {
        List<TeamBaseInfoDTO> teamInfos = teamMapper.selectBaseInfoDTOByIds(teamIds);
        if (teamInfos.isEmpty()) {
            return new ArrayList<>();
        }
        Map<Long, TeamCteInfo> teamIdToTeamMap = new HashMap<>();
        for (TeamBaseInfoDTO team : teamInfos) {
            TeamCteInfo info = new TeamCteInfo();
            info.setId(team.getId());
            info.setParentId(team.getParentId());
            teamIdToTeamMap.put(team.getId(), info);
        }
        Set<Long> parentIds = teamIdToTeamMap.keySet();
        while (!parentIds.isEmpty()) {
            List<TeamCteInfo> teams = teamMapper.selectTeamByParentIdIn(parentIds);
            parentIds = new HashSet<>();
            for (TeamCteInfo team : teams) {
                if (teamIdToTeamMap.containsKey(team.getId())) {
                    continue;
                }
                parentIds.add(team.getId());
                teamIdToTeamMap.put(team.getId(), team);
            }
        }
        return new ArrayList<>(teamIdToTeamMap.values());
    }
}
