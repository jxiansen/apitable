

package com.apitable.user.mapper;

import com.apitable.user.dto.PausedUserHistoryDto;
import com.apitable.user.entity.UserHistoryEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.time.LocalDateTime;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * User History Mapper Interface.
 * </p>
 */
public interface UserHistoryMapper extends BaseMapper<UserHistoryEntity> {

    /**
     * Query the latest logoff application record according to the user ID.
     *
     * @param userId User ID
     * @return UserHistoryEntity
     */
    UserHistoryEntity selectLatest(@Param("userId") Long userId,
                                   @Param("userStatus") Integer userStatus);

    /**
     * Update user history according to user ID.
     *
     * @param userId     User ID
     * @param updateUser Data record updater, 0 represents system user
     * @return Number of affected records
     */
    int updateUpdateUserByUserId(@Param("userId") Long userId,
                                 @Param("updateUser") Long updateUser);

    /**
     * Get the operation record after created At After.
     *
     * @param createdAtBefore Create start time
     * @param createdAtAfter  Create end time
     * @param userStatus      User status
     * @return DTO
     */
    List<PausedUserHistoryDto> selectUserHistoryDtos(
        @Param("createdAtBefore") LocalDateTime createdAtBefore,
        @Param("createdAtAfter") LocalDateTime createdAtAfter,
        @Param("userStatus") Integer userStatus);

    List<Long> selectUserIdsByCreatedAtAndUserStatus(@Param("startAt") LocalDateTime startAt,
                                                     @Param("endAt")
                                                     LocalDateTime endAt,
                                                     @Param("userStatus") Integer userStatus);

}
