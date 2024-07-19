

package com.apitable.template.mapper;

import com.apitable.template.entity.TemplatePropertyRelEntity;
import com.apitable.template.model.TemplatePropertyRelDto;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Template Property Rel Mapper.
 * </p>
 */
public interface TemplatePropertyRelMapper extends BaseMapper<TemplatePropertyRelEntity> {

    /**
     * Query entities by property code.
     */
    List<TemplatePropertyRelEntity> selectByPropertyCode(
        @Param("propertyCode") String propertyCode);

    /**
     * Increase property order.
     */
    int updateIncPropertyOrderByPropertyCodeIn(
        @Param("propertyCodes") Collection<String> propertyCodes);

    /**
     * Increase id by id.
     */
    int updateIncIdByIdGreaterThanEqual(@Param("minId") Long minId);

    /**
     * Update id by property code and template id.
     */
    int updateIdByPropertyCodeAndTemplateId(@Param("updatedId") Long updatedId,
                                            @Param("propertyCode") String propertyCode,
                                            @Param("templateId") String templateId);

    /**
     * Delete by template id.
     */
    int deleteByTemplateId(@Param("templateId") String templateId);

    /**
     * Delete by property code and template id.
     */
    int deleteByPropertyCodeAndTemplateId(@Param("propertyCode") String propertyCode,
                                          @Param("templateId") String templateId);

    /**
     * Delete by property code.
     */
    int deleteByPropertyCode(@Param("propertyCode") String propertyCode);

    /**
     * Batch delete.
     */
    int deleteBatch();

    /**
     * Batch insert.
     */
    int insertBatch(@Param("entities") List<TemplatePropertyRelEntity> entities);

    /**
     * Query template id list by property code.
     */
    List<String> selectTemplateIdsByPropertyCode(@Param("propertyCode") String propertyCode);

    /**
     * Query template ids by property id list.
     */
    List<TemplatePropertyRelDto> selectTemplateIdsByPropertyIds(
        @Param("propertyCodes") List<String> propertyCodes);
}
