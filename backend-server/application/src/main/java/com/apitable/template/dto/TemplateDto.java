

package com.apitable.template.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * template dto.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class TemplateDto extends TemplateInfo {

    private String nodeName;

    private String icon;

    private String cover;

    private Integer type;

    private String avatar;

    private String nickName;

    private Boolean isNickNameModified;

    private String spaceName;
}
