

package com.apitable.workspace.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * node description parse dto.
 */
@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class NodeDescParseDTO {

    private List<String> content;

    private List<String> imageUrl;
}
