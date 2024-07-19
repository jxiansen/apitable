

package com.apitable.template.mapper;

import com.apitable.template.dto.TemplateDto;
import com.apitable.template.dto.TemplateInfo;
import com.apitable.template.entity.TemplateEntity;
import com.apitable.template.model.OnlineTemplateDto;
import com.baomidou.mybatisplus.annotation.InterceptorIgnore;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import java.util.Set;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Template Mapper.
 * </p>
 */
public interface TemplateMapper extends BaseMapper<TemplateEntity> {

    /**
     * Query count by type id.
     */
    Integer countByTypeId(@Param("typeId") String typeId);

    /**
     * Query id by type id and name.
     */
    Long selectIdByTypeIdAndName(@Param("typeId") String typeId, @Param("name") String name);

    /**
     * Query node id by template id.
     */
    String selectNodeIdByTempId(@Param("templateId") String templateId);

    /**
     * Query template name.
     */
    String selectNameByTemplateIdIncludeDelete(@Param("templateId") String templateId);

    /**
     * Query updater user id.
     */
    Long selectUpdatersByTempId(@Param("templateId") String templateId);

    /**
     * Query type id by template id.
     */
    String selectTypeIdByTempId(@Param("templateId") String templateId);

    /**
     * Update used times by template id.
     */
    int updateUsedTimesByTempId(@Param("templateId") String templateId,
                                @Param("offset") Integer offset);

    /**
     * Update delete status by template id.
     */
    int updateIsDeletedByTempId(@Param("templateId") String templateId);

    /**
     * Query template information.
     *
     * @param typeId        type id
     * @param templateIds   template ids
     * @return List of TemplateInfo
     * @author Chambers
     */
    List<TemplateInfo> selectInfoByTypeIdAndTemplateIds(@Param("typeId") String typeId,
                                                        @Param("templateIds") List<String> templateIds);

    /**
     * Query dto by type id.
     */
    List<TemplateDto> selectDtoByTypeId(@Param("typeId") String typeId,
                                        @Param("list") List<String> templateIds);

    /**
     * Query dto by template id.
     */
    @InterceptorIgnore(illegalSql = "true")
    TemplateDto selectDtoByTempId(@Param("templateId") String templateId);

    /**
     * Query template info by template id.
     */
    TemplateInfo selectInfoByTempId(@Param("templateId") String templateId);

    /**
     * Query template info by table id.
     */
    TemplateInfo selectInfoById(@Param("id") Long id);

    /**
     * Query template info by type id.
     */
    List<TemplateInfo> selectInfoByTypeId(@Param("typeId") String typeId);

    /**
     * Query node id by template id and type.
     */
    String selectNodeIdByTempIdAndType(@Param("tempId") String tempId, @Param("type") Integer type);

    /**
     * Query dto by fuzzy search.
     */
    List<OnlineTemplateDto> selectByTemplateIds(@Param("list") Set<String> templateIds);
}
