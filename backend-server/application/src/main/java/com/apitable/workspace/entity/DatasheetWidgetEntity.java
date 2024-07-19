

package com.apitable.workspace.entity;

import com.baomidou.mybatisplus.annotation.IdType;
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
 * Workbench - Datasheet Widget Table.
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
@TableName(keepGlobalPrefix = true, value = "datasheet_widget")
public class DatasheetWidgetEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID.
     */
    private String spaceId;

    /**
     * Datasheet ID(link#xxxx_datasheet#dst_id).
     */
    private String dstId;

    /**
     * Customized component ID.
     */
    private String widgetId;

    /**
     * Widget references source ID, such as mirror.
     */
    private String sourceId;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
