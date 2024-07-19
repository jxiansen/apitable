

package com.apitable.space.dto;

import lombok.Data;

/**
 * space link dto.
 */
@Data
public class SpaceLinkDTO {

    private Long id;

    private String spaceId;

    private String spaceName;

    private Long teamId;

    private String teamName;

    private Long userId;

    private Long memberId;

    private String memberName;

    private boolean isMainAdmin;

    private boolean isAdmin;
}
