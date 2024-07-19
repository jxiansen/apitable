

package com.apitable.automation.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * automation copy options.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class AutomationCopyOptions {

    private boolean sameSpace;

    private String overriddenName;

    private boolean removeButtonClickedInput;
}
