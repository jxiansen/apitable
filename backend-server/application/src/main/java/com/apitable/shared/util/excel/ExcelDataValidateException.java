

package com.apitable.shared.util.excel;

import com.apitable.organization.dto.UploadDataDTO;
import lombok.Data;
import lombok.EqualsAndHashCode;


/**
 * <p>
 * Excel cell data validate exception.
 * </p>
 *
 * @author Shawn Deng
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class ExcelDataValidateException extends RuntimeException {

    private Integer rowIndex;

    private UploadDataDTO rowData;

    /**
     * constructor.
     *
     * @param rowIndex row index
     * @param rowData  row data
     * @param message  error message
     */
    public ExcelDataValidateException(Integer rowIndex, UploadDataDTO rowData, String message) {
        super(message);
        this.rowIndex = rowIndex;
        this.rowData = rowData;
    }
}
