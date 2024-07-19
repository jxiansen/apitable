

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
 * Workbench - Datasheet Record Source Table.
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
@TableName(keepGlobalPrefix = true, value = "datasheet_record_source")
public class DatasheetRecordSourceEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Datasheet ID(link#xxxx_datasheet#dst_id).
     */
    private String dstId;

    /**
     * Data record ID(link#xxxx_datasheet_record#record_id).
     */
    private String recordId;

    /**
     * Source ID.
     */
    private String sourceId;

    /**
     * Data source type(0:user_interface,1:openapi,2:relation_effect).
     */
    private Integer type;

    /**
     * Creator.
     */
    @TableField(fill = FieldFill.INSERT)
    private Long createdBy;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
