

package com.apitable.widget.dto;

import lombok.Data;

/**
 * last submit widget version dto.
 */
@Data
public class LastSubmitWidgetVersionDTO {

    private Long lastPackageId;

    private Long lastPackageReleaseId;

    private Long lastPackageAuthSpaceId;
}
