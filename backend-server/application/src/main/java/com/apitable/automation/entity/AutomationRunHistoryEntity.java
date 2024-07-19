

package com.apitable.automation.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
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
 * Automation - Run history table.
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
@TableName(keepGlobalPrefix = true, value = "automation_run_history")
public class AutomationRunHistoryEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private BigInteger id;

    /**
     * Task ID.
     */
    private String taskId;

    /**
     * Custom Robot ID.
     */
    private String robotId;

    /**
     * Space ID.
     */
    private String spaceId;

    /**
     * Running status (0: Running, 1: Success, 2: Failure).
     */
    private Integer status;

    /**
     * Run Context Details.
     */
    private String data;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;
}
