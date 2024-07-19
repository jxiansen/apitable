

package com.apitable.organization.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

import com.apitable.AbstractIntegrationTest;
import com.apitable.core.exception.BusinessException;
import com.apitable.mock.bean.MockUserSpace;
import com.apitable.organization.enums.OrganizationException;
import org.junit.jupiter.api.Test;

/**
 * unit service test.
 */
public class UnitServiceImplTest extends AbstractIntegrationTest {
    @Test
    void testCheckUnitWithNull() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        assertDoesNotThrow(() -> iUnitService.checkUnit(userSpace.getMemberId(), null));
    }

    @Test
    void testCheckUnitWithNotExists() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        BusinessException exception = assertThrows(BusinessException.class,
            () -> iUnitService.checkUnit(userSpace.getMemberId(), "123"));
        assertThat(exception.getCode()).isEqualTo(
            OrganizationException.ILLEGAL_UNIT_ID.getCode());
    }

    @Test
    void testCheckUnitWithNotInTeam() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long teamId = iTeamService.createSubTeam(userSpace.getSpaceId(), "test_team",
            iTeamService.getRootTeamId(userSpace.getSpaceId()));
        Long teamUnitId = iUnitService.getUnitIdByRefId(teamId);
        BusinessException exception = assertThrows(BusinessException.class,
            () -> iUnitService.checkUnit(userSpace.getMemberId(), teamUnitId.toString()));
        assertThat(exception.getCode()).isEqualTo(
            OrganizationException.ILLEGAL_UNIT_ID.getCode());
    }

    @Test
    void testCheckUnitWithWrongMember() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Long memberId = iMemberService.createMember(userSpace.getUserId(), userSpace.getSpaceId(),
            iTeamService.getRootTeamId(userSpace.getSpaceId()));
        Long memberUnitId = iUnitService.getUnitIdByRefId(memberId);
        BusinessException exception = assertThrows(BusinessException.class,
            () -> iUnitService.checkUnit(userSpace.getMemberId(), memberUnitId.toString()));
        assertThat(exception.getCode()).isEqualTo(
            OrganizationException.ILLEGAL_UNIT_ID.getCode());
    }

}
