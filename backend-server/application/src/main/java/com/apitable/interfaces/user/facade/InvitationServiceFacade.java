

package com.apitable.interfaces.user.facade;

import com.apitable.interfaces.user.model.InvitationMetadata;
import com.apitable.interfaces.user.model.MultiInvitationMetadata;

/**
 * invitation service facade.
 */
public interface InvitationServiceFacade {

    /**
     * send invitation email.
     *
     * @param metadata metadata
     */
    void sendInvitationEmail(InvitationMetadata metadata);

    /**
     * send invitation email.
     *
     * @param metadata metadata
     */
    void sendInvitationEmail(MultiInvitationMetadata metadata);
}
