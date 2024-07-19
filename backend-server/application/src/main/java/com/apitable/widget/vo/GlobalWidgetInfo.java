

package com.apitable.widget.vo;

import lombok.Getter;

/**
 * <p>
 * Global widget config.
 * </p>
 */
@Getter
public class GlobalWidgetInfo {

    private String packageId;

    private String packageName;

    private Boolean isEnabled;

    private Boolean isTemplate;

    private String version;

    private Integer widgetSort;

    /* Widget Extension Fields, widget_body */
    private String openSourceAddress;

    private String templateCover;

    private String website;
    /* Widget Extension Fields, widget_body */

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public void setIsEnabled(Boolean enabled) {
        this.isEnabled = enabled;
    }

    public void setIsTemplate(Boolean template) {
        this.isTemplate = template;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public void setWidgetSort(Integer widgetSort) {
        this.widgetSort = widgetSort;
    }

    public void setOpenSourceAddress(String openSourceAddress) {
        this.openSourceAddress = openSourceAddress;
    }

    public void setTemplateCover(String templateCover) {
        this.templateCover = templateCover;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
