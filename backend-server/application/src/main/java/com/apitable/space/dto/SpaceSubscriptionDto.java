

package com.apitable.space.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * space subscription dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class SpaceSubscriptionDto {

    private String productCategory;

    private String planId;

    private String metadata;

    private LocalDateTime expireTime;
}
