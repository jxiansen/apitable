

package com.apitable.user.service;

import com.apitable.user.dto.PausedUserHistoryDto;
import com.apitable.user.entity.UserEntity;
import com.apitable.user.entity.UserHistoryEntity;
import com.apitable.user.enums.UserOperationType;
import com.baomidou.mybatisplus.extension.service.IService;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * User History Service Interface.
 * </p>
 */
public interface IUserHistoryService extends IService<UserHistoryEntity> {

    /**
     * Get a user's recent operation record of a certain type.
     *
     * @param userId            User ID
     * @param userOperationType User Operation Type
     * @return LatestUserHistoryEntity
     */
    UserHistoryEntity getLatestUserHistoryEntity(Long userId, UserOperationType userOperationType);

    /**
     * Verify whether the user can log off.
     *
     * @param userId User ID
     * @return boolean True allowed, false not allowed
     */
    boolean checkAccountAllowedToBeClosed(Long userId);

    /**
     * Add user operation records and retain all user data.
     *
     * @param user              User
     * @param userOperationType User Operation Type
     * @return Number of rows affected
     */
    int create(UserEntity user, UserOperationType userOperationType);

    /**
     * Add user operation records and customize the data to be retained.
     *
     * @param userHistory User History
     */
    void create(UserHistoryEntity userHistory);

    /**
     * Get the operation record after created At After.
     *
     * @param createdAtBefore   Create start time
     * @param createdAtAfter    Create end time
     * @param userOperationType User Operation Type
     * @return UserHistoryDto
     */
    List<PausedUserHistoryDto> getUserHistoryDtos(LocalDateTime createdAtBefore,
                                                  LocalDateTime createdAtAfter,
                                                  UserOperationType userOperationType);

    /**
     * Get a list of user IDs for a specific operation over time.
     *
     * @param startAt       start tie
     * @param endAt         end time
     * @param operationType operation type
     * @return list of user's id
     */
    List<Long> getUserIdsByCreatedAtAndUserOperationType(LocalDateTime startAt,
                                                         LocalDateTime endAt,
                                                         UserOperationType operationType);
}
