

package com.apitable.space.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.List;
import lombok.Data;

/**
 * Space Group Resource Dto.
 */
@Data
@Schema(description = "Space Resource Group")
public class SpaceGroupResourceDto implements Serializable {

    private static final long serialVersionUID = 3010701075278742759L;

    private String groupCode;

    private String groupName;

    private String groupDesc;

    private List<String> resources;
}
