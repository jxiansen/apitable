

package com.apitable.organization.dto;

import lombok.Data;

/**
 * upload parse error detail dto.
 */
@Data
public class UploadParseErrorDetailDTO {

    private String row;

    private String errorMsg;
}
