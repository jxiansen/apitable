

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
 * Workbench -  Node Table.
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
@TableName(keepGlobalPrefix = true, value = "node")
public class NodeEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID(link#xxxx_space#space_id).
     */
    private String spaceId;

    /**
     * unit id(link#xxxx_unit#id).
     */
    private Long unitId;

    /**
     * Parent Node Id.
     */
    private String parentId;

    /**
     * ID of the previous node under the same level.
     */
    private String preNodeId;

    /**
     * Custom Node ID.
     */
    private String nodeId;

    /**
     * Node Name.
     */
    private String nodeName;

    /**
     * Node Icon.
     */
    private String icon;

    /**
     * Type (0:Root node,1:Folder,2:Datasheet).
     */
    private Integer type;

    /**
     * Cover Draw TOKEN.
     */
    private String cover;

    /**
     * Is Template (0: No, 1: Yes).
     */
    private Boolean isTemplate;

    /**
     * Other information.
     */
    private String extra;

    /**
     * Creator.
     */
    private Long creator;

    /**
     * deleted path.
     */
    private String deletedPath;

    /**
     * Delete tag(0:No,1:Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Recycle Bin Tag (0: No, 1: Yes).
     */
    private Boolean isRubbish;

    /**
     * Banned or not (0: No, 1: Yes).
     */
    private Boolean isBanned;

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
