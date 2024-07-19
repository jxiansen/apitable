

package com.apitable.internal.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Url Aware Content Vo.
 */
@Data
@Schema(description = "URL Content Recognition Results")
public class UrlAwareContentVo {

    private Boolean isAware;

    private String favicon;

    private String title;

    public UrlAwareContentVo() {
    }

    public UrlAwareContentVo(Boolean isAware) {
        this.isAware = isAware;
    }
}
