

package com.apitable.template.mapper;

import com.apitable.template.entity.TemplatePropertyEntity;
import com.apitable.template.model.TemplateKeyWordSearchDto;
import com.apitable.template.model.TemplatePropertyDto;
import com.apitable.template.model.TemplatePropertyRelDto;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Template Property Mapper.
 * </p>
 */
public interface TemplatePropertyMapper extends BaseMapper<TemplatePropertyEntity> {

    /**
     * Query entity.
     */
    TemplatePropertyEntity selectByPropertyCodeAndPropertyType(
        @Param("propertyCode") String propertyCode, @Param("propertyType") Integer propertyType);

    /**
     * Query entity by property type and name.
     */
    TemplatePropertyEntity selectByPropertyTypeAndPropertyName(
        @Param("propertyType") Integer propertyType, @Param("propertyName") String propertyName);

    /**
     * query property names by property codes.
     */
    List<String> selectPropertyNameByPropertyCodeIn(
        @Param("propertyCodes") List<String> propertyCodes);

    /**
     * Query template property dto list by i18n.
     */
    List<TemplatePropertyDto> selectTemplatePropertiesWithI18n(@Param("lang") String lang);

    /**
     * Query property code.
     */
    List<String> selectPropertyCodeByPropertyTypeAndI18nName(
        @Param("propertyType") Integer propertyType, @Param("i18nName") String i18nName);

    /**
     * Query template property dto list by i18n after order.
     */
    List<TemplatePropertyDto> selectTemplatePropertiesWithLangAndOrder(@Param("type") Integer type,
                                                                       @Param("lang") String lang);

    /**
     * query all template property.
     */
    List<TemplatePropertyDto> selectAllTemplatePropertyDto();

    /**
     * update updatedBy by ids.
     */
    int updateUpdatedByByPropertyCodes(@Param("propertyCodes") List<String> propertyCodes,
                                       @Param("updatedBy") Long updatedBy);

    /**
     * remove by property codes.
     */
    int removeByPropertyCodes(@Param("propertyCodes") List<String> propertyCodes,
                              @Param("updatedBy") Long updatedBy);

    /**
     * Batch insert.
     */
    int insertBatch(@Param("entities") List<TemplatePropertyEntity> entities);

    /**
     * Batch delete by ids.
     */
    int deleteBatchByIds(@Param("ids") List<Long> ids, @Param("updatedBy") Long updatedBy);

    /**
     * Query property id by code and type.
     */
    Long selectIdByCodeAndType(@Param("code") String code, @Param("type") Integer type);

    /**
     * Query properties by template id list and type.
     */
    List<TemplatePropertyRelDto> selectPropertiesByTemplateIdsAndType(
        @Param("templateIds") List<String> templateIds,
        @Param("type") Integer type);

    /**
     * Query dto by fuzzy search.
     */
    List<TemplateKeyWordSearchDto> selectTemplateByPropertyNameAndLang(
        @Param("keyWord") String keyWord, @Param("lang") String lang);

    /**
     * Batch delete.
     */
    int deleteBatch();

    /**
     * Query count by i18n.
     */
    int countByI18n(@Param("lang") String lang);
}
