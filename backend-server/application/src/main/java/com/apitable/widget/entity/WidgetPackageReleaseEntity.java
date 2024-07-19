

package com.apitable.widget.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
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
 * Workbench-Widget Package Release Table.
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
@TableName(keepGlobalPrefix = true, value = "widget_package_release")
public class WidgetPackageReleaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Version Summary Unique ID(id+package_id+version generate).
     */
    private String releaseSha;

    /**
     * Version number, unique under package id.
     */
    private String version;

    /**
     * Widget Package ID.
     */
    private String packageId;

    /**
     * User ID(link#xxxx_user#id).
     */
    private Long releaseUserId;

    /**
     * Release Code Bundle.
     */
    private String releaseCodeBundle;

    /**
     * Source Code Bundle.
     */
    private String sourceCodeBundle;

    /**
     * Source code encryption key.
     */
    private String secretKey;

    /**
     * Status (0: to be approved, 1: approved, 2: rejected).
     */
    private Integer status;

    /**
     * Release Version Description.
     */
    private String releaseNote;

    /**
     * Delete Tag(0: No, 1: Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Creator.
     */
    @TableField(fill = FieldFill.INSERT)
    private Long createdBy;

    /**
     * Last Update By.
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Long updatedBy;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

    /**
     * Installation environment code.
     */
    private String installEnvCode;

    /**
     * Operate environment code.
     */
    private String runtimeEnvCode;


}
