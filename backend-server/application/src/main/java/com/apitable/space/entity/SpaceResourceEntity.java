

package com.apitable.space.entity;

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
 * Workbench - Permission Resource Table.
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
@TableName(keepGlobalPrefix = true, value = "space_resource")
public class SpaceResourceEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Group Code.
     */
    private String groupCode;

    /**
     * Resource Code.
     */
    private String resourceCode;

    /**
     * Resource Name.
     */
    private String resourceName;

    /**
     * Resource URL.
     */
    private String resourceUrl;

    /**
     * Describe.
     */
    private String resourceDesc;

    /**
     * Is it assignable(0:No,1:Yes).
     */
    private Boolean assignable;

    /**
     * State(0:Disable,1:Enable).
     */
    private Boolean isEnabled;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
