

package com.apitable.space.service.impl;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractIntegrationTest;
import com.apitable.control.entity.ControlRoleEntity;
import com.apitable.mock.bean.MockInvitation;
import com.apitable.user.entity.UserEntity;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import java.util.List;
import java.util.stream.Collectors;
import org.junit.jupiter.api.Test;

public class SpaceInviteLinkServiceImplTest extends AbstractIntegrationTest {

    @Test
    public void testJoinSpaceByNodeInvitationToken() {
        MockInvitation invitation = prepareInvitationToken();
        UserEntity user = createUserWithEmail(IdWorker.getIdStr() + "@test.com");
        iSpaceInviteLinkService.join(user.getId(), invitation.getToken(), invitation.getNodeId());
        Long memberId = iMemberService.getMemberIdByUserIdAndSpaceId(user.getId(), invitation.getSpaceId());
        Long unitId = iUnitService.getUnitIdByRefId(memberId);
        List<ControlRoleEntity> controls = iControlRoleService.getByControlId(invitation.getNodeId());
        List<Long> unitIds = controls.stream().map(ControlRoleEntity::getUnitId).collect(Collectors.toList());
        assertThat(unitIds).contains(unitId);
    }
}
