

package com.apitable.workspace.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * <p>
 * Workbench - Resource Changeset Table.
 * </p>
 *
 * @author Mybatis Generator Tool
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@EqualsAndHashCode
@TableName(keepGlobalPrefix = true, value = "resource_changeset")
public class ResourceChangesetEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Resource ID(node_id/widget_id/..).
     */
    private String resourceId;

    /**
     * Resource type (0: number table; 1: collection table; 2: dashboard; 3: component).
     */
    private Integer resourceType;

    /**
     * The unique ID of the changeset request, which is used to ensure the uniqueness of the changeset.
     */
    private String messageId;

    /**
     * Collection of operation actions.
     */
    private String operations;

    /**
     * Version.
     */
    private Long revision;

    /**
     * Data source type (0: default).
     */
    private Integer sourceType;

    /**
     * Create User.
     */
    @TableField(fill = FieldFill.INSERT)
    private Long createdBy;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
