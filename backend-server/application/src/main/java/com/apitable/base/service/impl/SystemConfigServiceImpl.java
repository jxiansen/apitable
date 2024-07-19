

package com.apitable.base.service.impl;

import static com.apitable.core.constants.RedisConstants.GENERAL_CONFIG;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import com.apitable.base.entity.SystemConfigEntity;
import com.apitable.base.enums.SystemConfigType;
import com.apitable.base.mapper.SystemConfigMapper;
import com.apitable.base.model.SystemConfigDTO;
import com.apitable.base.service.ISystemConfigService;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import jakarta.annotation.Resource;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * System Config Service Implement Class.
 *
 * @author tao
 */
@Service
@Slf4j
public class SystemConfigServiceImpl implements ISystemConfigService {

    @Resource
    private SystemConfigMapper systemConfigMapper;

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    /**
     * Get Wizard Config.
     *
     * @param lang Language
     * @return config
     */
    @Override
    public Object getWizardConfig(final String lang) {
        String key = StrUtil.format(GENERAL_CONFIG, "wizards", lang);
        Object cacheVal = redisTemplate.opsForValue().get(key);
        if (cacheVal != null) {
            return cacheVal;
        }
        // Query the database
        return findConfig(SystemConfigType.WIZARD_CONFIG, lang);
    }

    /**
     * Find Config.
     *
     * @param type configuration type
     * @param lang configuration language (optional)
     * @return config
     */
    @Override
    public String findConfig(final SystemConfigType type, final String lang) {
        return systemConfigMapper.selectConfigMapByType(type.getType(), lang);
    }

    /**
     * Find System Config DTOs.
     *
     * @param type configuration type
     * @return List of SystemConfigDTO
     */
    @Override
    public List<SystemConfigDTO> findSystemConfigDTOs(
        final SystemConfigType type) {
        return systemConfigMapper.selectConfigDtoByType(type.getType());
    }

    /**
     * Save Or Update.
     *
     * @param userId    user id
     * @param type      configuration type
     * @param lang      configuration language
     * @param configVal configuration value
     */
    @Override
    public void saveOrUpdate(
        final Long userId,
        final SystemConfigType type,
        final String lang,
        final String configVal
    ) {
        Long id =
            systemConfigMapper.selectIdByTypeAndLang(type.getType(), lang);
        // does not exist, create a new record
        if (ObjectUtil.isNull(id)) {
            SystemConfigEntity entity = SystemConfigEntity.builder()
                .id(IdWorker.getId())
                .type(type.getType())
                .i18nName(lang)
                .configMap(configVal)
                .createdBy(userId)
                .updatedBy(userId)
                .build();
            systemConfigMapper.insert(entity);
            return;
        }
        // exist, update the record
        SystemConfigEntity entity = SystemConfigEntity.builder()
            .id(id)
            .configMap(configVal)
            .updatedBy(userId)
            .build();
        systemConfigMapper.updateById(entity);
    }

}
