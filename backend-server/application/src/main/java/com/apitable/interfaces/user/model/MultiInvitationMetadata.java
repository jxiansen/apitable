

package com.apitable.interfaces.user.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * multi invitation metadata.
 */
@Getter
@AllArgsConstructor
public class MultiInvitationMetadata {

    private Long inviteUserId;

    private String spaceId;

    private List<String> emails;
}
