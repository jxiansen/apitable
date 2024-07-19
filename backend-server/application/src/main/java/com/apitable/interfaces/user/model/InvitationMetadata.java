

package com.apitable.interfaces.user.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * invitation metadata.
 */
@Getter
@AllArgsConstructor
public class InvitationMetadata {

    private Long inviteUserId;

    private String spaceId;

    private String email;
}
