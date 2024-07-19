

package com.apitable.space.service;

import com.apitable.space.vo.EmailInvitationValidateVO;

/**
 * Space Invitation Service.
 */
public interface ISpaceInvitationService {

    /**
     * Valid Email Invitation.
     *
     * @param inviteToken invitation token
     * @return Invitation related information view
     */
    EmailInvitationValidateVO validEmailInvitation(String inviteToken);

    /**
     * Accept Email Invitation.
     *
     * @param userId        user id
     * @param inviteToken   invitation token
     * @return member id
     * @author Chambers
     */
    Long acceptEmailInvitation(Long userId, String inviteToken);
}
