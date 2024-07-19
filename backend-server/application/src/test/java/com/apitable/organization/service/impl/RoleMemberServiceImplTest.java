

package com.apitable.organization.service.impl;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.collection.CollUtil;
import com.apitable.AbstractIntegrationTest;
import com.apitable.mock.bean.MockUserSpace;
import com.apitable.organization.enums.UnitType;
import com.apitable.organization.ro.RoleMemberUnitRo;
import com.apitable.organization.vo.RoleMemberVo;
import com.apitable.shared.util.page.PageHelper;
import com.apitable.shared.util.page.PageInfo;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

public class RoleMemberServiceImplTest extends AbstractIntegrationTest {

    @Test
    void givenRoleAndOrgUnitsWhenAddRoleMembersThenSuccessPass() {
        MockUserSpace mockSpace = createSingleUserAndSpace();
        Long roleId =
            iRoleService.createRole(mockSpace.getUserId(), mockSpace.getSpaceId(), "Development");
        Long memberId = iMemberService.getMemberIdByUserIdAndSpaceId(mockSpace.getUserId(),
            mockSpace.getSpaceId());
        Long teamId = iTeamService.getRootTeamId(mockSpace.getSpaceId());
        List<RoleMemberUnitRo> orgUnitRos = new ArrayList<RoleMemberUnitRo>() {
            {
                RoleMemberUnitRo teamUnit = new RoleMemberUnitRo();
                RoleMemberUnitRo memberUnit = new RoleMemberUnitRo();
                teamUnit.setId(teamId);
                teamUnit.setType(1);
                memberUnit.setId(memberId);
                memberUnit.setType(3);
                add(teamUnit);
                add(memberUnit);
            }
        };
        List<Long> memberIds = iRoleMemberService.addRoleMembers(roleId, orgUnitRos);
        assertThat(memberIds.size()).isEqualTo(1);
        assertThat(memberIds.contains(memberId)).isTrue();
    }

    @Test
    void givenRoleRoleMembersWhenGetRoleRoleMembersThenGetRoleMemberVos() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long role = addRoleMembers(userSpace);
        Page<Void> page = new Page<>();
        page.setSize(2);
        IPage<RoleMemberVo> roleMembersPage =
            iRoleMemberService.getRoleMembersPage(userSpace.getSpaceId(), role, page);
        PageInfo<RoleMemberVo> resultMember = PageHelper.build(roleMembersPage);
        assertThat(resultMember.getPageNum()).isEqualTo(1);
        assertThat(resultMember.getPages()).isEqualTo(2);
        assertThat(resultMember.getSize()).isEqualTo(2);
        assertThat(resultMember.getTotal()).isEqualTo(3);
        assertThat(resultMember.getRecords().size()).isEqualTo(2);
        assertThat(resultMember.getRecords().get(0).getIsMainAdmin()).isTrue();
        assertThat(resultMember.getRecords().get(0).getTeams()).isEqualTo("test space");
    }

    @Test
    void givenRoleRoleMembersWhenDeleteRoleMembersThenGetRoleMemberVos() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long role = addRoleMembers(userSpace);
        Long adminMemberId = iMemberService.getMemberIdByUserIdAndSpaceId(userSpace.getUserId(),
            userSpace.getSpaceId());
        Long rootTeamId = iTeamService.getRootTeamId(userSpace.getSpaceId());
        List<Long> memberIds = iRoleMemberService.removeByRoleIdAndRoleMemberIds(role,
            CollUtil.newArrayList(adminMemberId, rootTeamId));
        assertThat(memberIds.size()).isEqualTo(2);
        assertThat(memberIds.contains(adminMemberId)).isTrue();
        Page<Void> page = new Page<>();
        IPage<RoleMemberVo> roleMembersPage =
            iRoleMemberService.getRoleMembersPage(userSpace.getSpaceId(), role, page);
        PageInfo<RoleMemberVo> resultMember = PageHelper.build(roleMembersPage);
        assertThat(resultMember.getPages()).isEqualTo(1);
        assertThat(resultMember.getSize()).isEqualTo(1);
        assertThat(resultMember.getRecords().size()).isEqualTo(1);
        assertThat(resultMember.getRecords().get(0).getUnitType()).isEqualTo(
            UnitType.MEMBER.getType());
    }

    @Test
    void givenEmptyMemberRoleWhenCheckRoleMemberExistByRoleIdThen() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long roleId =
            iRoleService.createRole(userSpace.getUserId(), userSpace.getSpaceId(), "empty");
        iRoleMemberService.checkRoleMemberExistByRoleId(roleId,
            status -> assertThat(status).isNotNull().isFalse());
    }

    @Test
    void givenRoleWithMemberWhenCheckRoleMemberExistByRoleIdThen() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long roleId = addRoleMembers(userSpace);
        iRoleMemberService.checkRoleMemberExistByRoleId(roleId,
            status -> assertThat(status).isNotNull().isTrue());
    }

}
