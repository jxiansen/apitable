

package com.apitable.workspace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * node extra dto.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NodeExtraDTO {
    private Integer showRecordHistory;

    private Integer dingTalkDaStatus;

    private String dingTalkTemplateKey;

    private String sourceTemplateId;
}
