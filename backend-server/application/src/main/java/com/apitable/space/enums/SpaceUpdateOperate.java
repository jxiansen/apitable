

package com.apitable.space.enums;

/**
 * <p>
 * Modify space operations (using space integrated with third-party IM).
 * </p>
 */
public enum SpaceUpdateOperate {

    /**
     * update the main administration operation.
     */
    UPDATE_MAIN_ADMIN,
    /**
     * modify member info.
     */
    UPDATE_MEMBER,
    /**
     * add team.
     */
    ADD_TEAM,
    /**
     * update team info.
     */
    UPDATE_TEAM,
    /**
     * delete team.
     */
    DELETE_TEAM,
    /**
     * delete space.
     */
    DELETE_SPACE;

    /**
     * dingtalk isv can be operated.
     *
     * @param value value
     * @return true or false
     */
    public static Boolean dingTalkIsvCanOperated(SpaceUpdateOperate value) {
        return value.equals(UPDATE_MEMBER) || value.equals(ADD_TEAM) || value.equals(UPDATE_TEAM)
            || value.equals(DELETE_TEAM);
    }

    /**
     * wecom isv can be operated.
     *
     * @param value value
     * @return true or false
     */
    public static boolean weComIsvCanOperated(SpaceUpdateOperate value) {

        return value.equals(UPDATE_MEMBER) || value.equals(ADD_TEAM) || value.equals(UPDATE_TEAM)
            || value.equals(DELETE_TEAM);

    }

    /**
     * lar isv can be operated.
     *
     * @param value value
     * @return true or false
     */
    public static boolean larIsvCanOperated(SpaceUpdateOperate value) {
        return value.equals(UPDATE_MEMBER);
    }

}
