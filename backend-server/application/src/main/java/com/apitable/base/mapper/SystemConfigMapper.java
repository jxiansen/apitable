

package com.apitable.base.mapper;

import com.apitable.base.entity.SystemConfigEntity;
import com.apitable.base.model.SystemConfigDTO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * Basics - System Configuration Table Mapper Interface.
 */
public interface SystemConfigMapper extends BaseMapper<SystemConfigEntity> {

    /**
     * Find the configuration record id to which the most popular recommendations
     * in the Template Center belong according to the language.
     *
     * @param type configuration type
     * @param lang configuration language
     * @return configuration primary key id
     */
    Long selectIdByTypeAndLang(@Param("type") Integer type, @Param("lang") String lang);

    /**
     * Find the configuration information in the system configuration table according to type.
     *
     * @param type Configuration type
     * @param lang Configuration language (optional)
     * @return configuration information
     */
    String selectConfigMapByType(@Param("type") Integer type, @Param("lang") String lang);

    /**
     * query i18n name by type.
     *
     * @param type config type
     * @return SystemConfigDTO list
     */
    List<SystemConfigDTO> selectConfigDtoByType(@Param("type") Integer type);

    /**
     * batch insert.
     *
     * @param entities System Config Entities
     * @return affected rows count
     */
    int insertBatch(@Param("entities") List<SystemConfigEntity> entities);

    /**
     * remove by table ids.
     *
     * @param ids       System Config Table ID List
     * @param updatedBy Updater User ID
     * @return affected rows count
     */
    int removeByIds(@Param("ids") List<Long> ids, @Param("updatedBy") Long updatedBy);

}
