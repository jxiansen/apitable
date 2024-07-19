

package com.apitable.automation.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * <p>
 * Automation - Trigger Table.
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
@TableName(keepGlobalPrefix = true, value = "automation_trigger")
public class AutomationTriggerEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private BigInteger id;

    /**
     * Robot ID (link#xxxx_automation_robot#robot_id).
     */
    private String robotId;

    /**
     * Trigger Type ID (link#xxxx_automation_trigger_type#trigger_type_id).
     */
    private String triggerTypeId;

    /**
     * Custom Trigger ID.
     */
    private String triggerId;

    /**
     * Previous Trigger ID.
     */
    private String prevTriggerId;

    /**
     * Resource ID(link#xxxx_node#node_id).
     */
    private String resourceId;

    /**
     * Trigger Input data of the instance.
     */
    private String input;

    /**
     * Delete Tag(0: No, 1: Yes).
     */
    @TableLogic
    private Integer isDeleted;

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
}
