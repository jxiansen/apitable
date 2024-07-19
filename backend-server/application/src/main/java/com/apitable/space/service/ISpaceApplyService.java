

package com.apitable.space.service;

/**
 * space apply service.
 */
public interface ISpaceApplyService {

    /**
     * create space join application.
     *
     * @param userId  userId
     * @param spaceId space id
     * @return ID
     */
    Long create(Long userId, String spaceId);

    /**
     * Send apply notifications.
     *
     * @param userId  user ID
     * @param spaceId space ID
     * @param applyId apply ID
     * @author Chambers
     */
    void sendApplyNotify(Long userId, String spaceId, Long applyId);

    /**
     * process space join application.
     *
     * @param userId   userId
     * @param notifyId notify id
     * @param agree    agree or not
     */
    void process(Long userId, Long notifyId, Boolean agree);
}
