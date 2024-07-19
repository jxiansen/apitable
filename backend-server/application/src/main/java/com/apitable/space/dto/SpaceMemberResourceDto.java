

package com.apitable.space.dto;

import java.util.List;
import lombok.Data;

/**
 * space member resource dto.
 */
@Data
public class SpaceMemberResourceDto {

    private Long memberId;

    private List<String> resources;
}
