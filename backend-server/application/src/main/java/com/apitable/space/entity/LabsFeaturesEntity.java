

package com.apitable.space.entity;


import com.baomidou.mybatisplus.annotation.IdType;
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
 * Labs Features Table.
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
@TableName(keepGlobalPrefix = true, value = "labs_features")
public class LabsFeaturesEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Unique identification of laboratory function.
     */
    private String featureKey;

    /**
     * Labs Features Category (user: user level, space: space level).
     */
    private Integer featureScope;

    /**
     * Type of laboratory function (static: no operation, review: can be applied, normal: can be switched on and off normally).
     */
    private Integer type;

    /**
     * Address of experimental function application form.
     */
    private String url;

    /**
     * Delete Tag(0: No, 1: Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
