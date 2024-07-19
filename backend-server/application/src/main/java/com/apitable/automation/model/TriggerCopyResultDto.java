

package com.apitable.automation.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * trigger copy result dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TriggerCopyResultDto {

    private Map<String, List<String>> robotIdToTriggerIdsMap = new HashMap<>();

    private Map<String, String> newTriggerMap = new HashMap<>();
}
