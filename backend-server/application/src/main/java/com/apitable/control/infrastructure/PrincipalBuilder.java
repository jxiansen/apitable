

package com.apitable.control.infrastructure;

/**
 * Control Principal Builder.
 *
 * @author Shawn Deng
 */
public class PrincipalBuilder {

    public static Principal unitId(Long unitId) {
        return new UnitId(unitId);
    }

    public static Principal memberId(Long memberId) {
        return new MemberId(memberId);
    }

    public static Principal teamId(Long teamId) {
        return new TeamId(teamId);
    }

    public static Principal roleId(Long roleId) {
        return new RoleId(roleId);
    }

    /**
     * principal type.
     */
    public interface Principal {

        Long getPrincipal();

        PrincipalType getPrincipalType();
    }

    /**
     * abstract principal.
     */
    private abstract static class AbstractPrincipal implements Principal {

        private final Long principal;

        public AbstractPrincipal(Long principal) {
            this.principal = principal;
        }

        @Override
        public Long getPrincipal() {
            return this.principal;
        }
    }

    /**
     * unit principal.
     */
    public static class UnitId extends AbstractPrincipal {

        public UnitId(Long unitId) {
            super(unitId);
        }

        @Override
        public PrincipalType getPrincipalType() {
            return PrincipalType.UNIT_ID;
        }
    }

    /**
     * member principal.
     */
    public static class MemberId extends AbstractPrincipal {

        public MemberId(Long memberId) {
            super(memberId);
        }

        @Override
        public PrincipalType getPrincipalType() {
            return PrincipalType.MEMBER_ID;
        }
    }

    /**
     * team principal.
     */
    public static class TeamId extends AbstractPrincipal {

        public TeamId(Long teamId) {
            super(teamId);
        }

        @Override
        public PrincipalType getPrincipalType() {
            return PrincipalType.TEAM_ID;
        }
    }

    /**
     * role principal.
     */
    public static class RoleId extends AbstractPrincipal {

        public RoleId(Long roleId) {
            super(roleId);
        }

        @Override
        public PrincipalType getPrincipalType() {
            return PrincipalType.ROLE_ID;
        }
    }
}
