

package com.apitable.workspace.dto;

import com.apitable.workspace.vo.DatasheetRecordVo;
import java.util.List;
import lombok.Data;

/**
 * datasheet record group dto.
 */
@Data
public class DataSheetRecordGroupDTO {

    private String dstId;

    private List<DatasheetRecordVo> recordVoList;
}
