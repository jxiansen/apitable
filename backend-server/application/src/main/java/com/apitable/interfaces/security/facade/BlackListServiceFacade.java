

package com.apitable.interfaces.security.facade;

/**
 * black list service facade.
 */
public interface BlackListServiceFacade {

    /**
     * check space.
     *
     * @param spaceId space id
     */
    void checkSpace(String spaceId);

    /**
     * check user.
     *
     * @param userId user id
     */
    void checkUser(Long userId);
}
