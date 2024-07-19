

package com.apitable.user.service.impl;

import static com.apitable.user.enums.DeveloperException.GENERATE_API_KEY_ERROR;

import com.apitable.core.util.ExceptionUtil;
import com.apitable.shared.util.ApiHelper;
import com.apitable.user.entity.DeveloperEntity;
import com.apitable.user.entity.UserEntity;
import com.apitable.user.mapper.DeveloperMapper;
import com.apitable.user.mapper.UserMapper;
import com.apitable.user.service.IDeveloperService;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * developer service implementation.
 */
@Service
@Slf4j
public class DeveloperServiceImpl implements IDeveloperService {

    @Resource
    private DeveloperMapper developerMapper;

    @Resource
    private UserMapper userMapper;

    @Override
    public boolean checkHasCreate(Long userId) {
        DeveloperEntity developer = developerMapper.selectByUserId(userId);
        return developer != null;
    }

    @Override
    public String getApiKeyByUserId(Long userId) {
        DeveloperEntity developer = developerMapper.selectByUserId(userId);
        return developer != null ? developer.getApiKey() : null;
    }

    @Override
    public boolean validateApiKey(String apiKey) {
        Long userId = developerMapper.selectUserIdByApiKey(apiKey);
        if (userId == null) {
            return false;
        }
        UserEntity user = userMapper.selectById(userId);
        return user != null
            && !user.getIsDeleted()
            && !user.getIsPaused(); // the user is paused or deleted, his api key is invalid.
    }

    @Override
    public String createApiKey(Long userId) {
        log.info("user [{}] create api key", userId);
        String apiKey = ApiHelper.createKey();
        DeveloperEntity developer = new DeveloperEntity();
        developer.setUserId(userId);
        developer.setApiKey(apiKey);
        boolean flag = SqlHelper.retBool(developerMapper.insert(developer));
        ExceptionUtil.isTrue(flag, GENERATE_API_KEY_ERROR);
        return apiKey;
    }

    @Override
    public String refreshApiKey(Long userId) {
        log.info("user [{}] refresh api key", userId);
        String apiKey = ApiHelper.createKey();
        boolean flag = SqlHelper.retBool(developerMapper.updateApiKeyByUserId(userId, apiKey));
        ExceptionUtil.isTrue(flag, GENERATE_API_KEY_ERROR);
        return apiKey;
    }
}
