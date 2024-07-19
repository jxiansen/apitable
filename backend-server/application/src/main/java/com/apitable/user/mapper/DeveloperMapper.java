

package com.apitable.user.mapper;

import com.apitable.user.entity.DeveloperEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * develop mapper.
 */
public interface DeveloperMapper extends BaseMapper<DeveloperEntity> {

    /**
     * query developer info by user id.
     *
     * @param userId user id
     * @return DeveloperEntity
     */
    DeveloperEntity selectByUserId(@Param("userId") Long userId);

    /**
     * modify API KEY by user id.
     *
     * @param userId user id
     * @param apiKey access token
     * @return row
     */
    int updateApiKeyByUserId(@Param("userId") Long userId, @Param("apiKey") String apiKey);

    /**
     * query user id by access token.
     *
     * @param apiKey access token
     * @return user id
     */
    Long selectUserIdByApiKey(@Param("apiKey") String apiKey);
}
