

package com.apitable.user.entity;

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
 * User Table.
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
@TableName(keepGlobalPrefix = true, value = "user")
public class UserEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * User ID.
     */
    private String uuid;

    /**
     * Nick Name.
     */
    private String nickName;

    /**
     * code.
     */
    private String code;

    /**
     * Phone Number.
     */
    private String mobilePhone;

    /**
     * Email.
     */
    private String email;

    /**
     * Password.
     */
    private String password;

    /**
     * Avatar.
     */
    private String avatar;

    /**
     * default avatar color number.
     */
    private Integer color;

    /**
     * Time Zone.
     */
    private String timeZone;

    /**
     * Gender.
     */
    private String gender;

    /**
     * Remark.
     */
    private String remark;

    /**
     * Language.
     */
    private String locale;

    /**
     * Unique identification in open application of DingTalk.
     */
    private String dingOpenId;

    /**
     * Unique identifier in the DingTalk developer enterprise.
     */
    private String dingUnionId;

    /**
     * Last Login Time.
     */
    private LocalDateTime lastLoginTime;

    /**
     * Whether the nickname has been modified as a third-party IM user. 0: No;
     * 1: Yes; 2: Not an IM third-party user.
     */
    private Integer isSocialNameModified;

    /**
     * Whether to cancel the cool off period (1: Yes, 0: No).
     */
    private Boolean isPaused;

    /**
     * Delete Tag (1: Yes, 0: No).
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
