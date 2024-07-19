

package com.apitable.workspace.entity;

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
 * Workbench - Datasheet Record Alarm Table.
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
@TableName(keepGlobalPrefix = true, value = "datasheet_record_alarm")
public class DatasheetRecordAlarmEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Alarm ID.
     */
    private String alarmId;

    /**
     * Space ID(link#space#space_id).
     */
    private String spaceId;

    /**
     * Datasheet ID(link#datasheet#dst_id).
     */
    private String dstId;

    /**
     * Record ID(link#datasheet_record#record_id).
     */
    private String recordId;

    /**
     * Field ID.
     */
    private String fieldId;

    /**
     * Alarm Time.
     */
    private LocalDateTime alarmAt;

    /**
     * Status: 0 - default, 1 - processing, 2 - process succeeded, 3 - process failed.
     */
    private Integer alarmStatus;

    /**
     * Delete Tag(0: No, 1: Yes).
     */
    @TableLogic
    private Integer isDeleted;

    /**
     * Create User.
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

}
