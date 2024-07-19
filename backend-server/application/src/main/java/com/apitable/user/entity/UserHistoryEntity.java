

package com.apitable.user.entity;

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
 * User History Table.
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
@TableName(keepGlobalPrefix = true, value = "user_history")
public class UserHistoryEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * User ID.
     */
    private Long userId;

    /**
     * User ID.
     */
    private String uuid;

    /**
     * Nick Name.
     */
    private String nickName;

    /**
     * Area Code.
     */
    private String code;

    /**
     * Mobile Phone.
     */
    private String mobilePhone;

    /**
     * Email.
     */
    private String email;

    /**
     * Avatar.
     */
    private String avatar;

    /**
     * Language.
     */
    private String locale;

    /**
     * User account status (1: Apply for account cancellation, 2: Cancel account cancellation, 3: Complete account cancellation).
     */
    private Integer userStatus;

    /**
     * Creator.
     */
    @TableField(fill = FieldFill.INSERT)
    private Long createdBy;

    /**
     * Updater.
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
