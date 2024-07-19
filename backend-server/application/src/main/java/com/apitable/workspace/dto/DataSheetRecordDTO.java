

package com.apitable.workspace.dto;

import cn.hutool.json.JSONObject;
import lombok.Data;

/**
 * datasheet record dto.
 */
@Data
public class DataSheetRecordDTO {

    private Long id;

    private String dstId;

    private String recordId;

    private JSONObject data;
}
