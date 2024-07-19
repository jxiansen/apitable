

package com.apitable.workspace.vo;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.config.properties.LimitProperties;
import com.apitable.shared.support.serializer.ChinaLocalDateTimeToUtcSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import java.util.Objects;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Search Node Results View.
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "Node View")
public class NodeInfoVo extends BaseNodeInfo {

    @Schema(description = "Space ID", example = "spc09")
    private String spaceId;

    @Schema(description = "Parent Node Id", example = "nod10")
    private String parentId;

    @Schema(description = "Previous node ID", example = "nod11")
    private String preNodeId;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Node icon", example = ":smile")
    private String icon;

    @Schema(description = "Whether there are sub nodes. The node type is folder", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean hasChildren;

    @Schema(description = "Whether it belongs to the template node", hidden = true)
    @JsonIgnore
    private Boolean isTemplate;

    @Schema(description = "Whether it belongs to the private area")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean nodePrivate;

    @Schema(description = "Whether the node is shared")
    private Boolean nodeShared;

    @Schema(description = "Whether the node permission is set")
    private Boolean nodePermitSet;

    @Schema(description = "Whether the node is a star")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean nodeFavorite;

    @Schema(description = "When the node is a data table, whether the returned data table field "
        + "has reached the upper limit", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean columnLimit;

    @Schema(description = "Metadata of data table node - data table field set length",
        hidden = true)
    @JsonIgnore
    private Integer mdFieldMapSize;

    @Schema(description = "Create time", type = "string", example = "2020-03-18T15:29:59.000")
    @JsonSerialize(using = ChinaLocalDateTimeToUtcSerializer.class)
    private LocalDateTime createTime;

    @Schema(description = "Update time", type = "string", example = "2020-03-18T15:29:59.000")
    @JsonSerialize(using = ChinaLocalDateTimeToUtcSerializer.class)
    private LocalDateTime updateTime;

    @Schema(description = "Role", example = "editor")
    private String role;

    @Schema(description = "Node Permissions")
    private NodePermissionView permissions;


    @Schema(description = "Node extra")
    private String extra;

    /**
     * Get Column Limit.
     */
    public Boolean getColumnLimit() {
        if (Objects.nonNull(this.mdFieldMapSize)) {
            LimitProperties properties = SpringContextHolder.getBean(LimitProperties.class);
            return this.mdFieldMapSize >= properties.getMaxColumnCount();
        }
        return false;
    }
}
