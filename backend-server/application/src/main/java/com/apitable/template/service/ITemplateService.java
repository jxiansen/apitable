

package com.apitable.template.service;

import com.apitable.template.entity.TemplateEntity;
import com.apitable.template.enums.TemplateException;
import com.apitable.template.model.TemplateSearchDTO;
import com.apitable.template.ro.CreateTemplateRo;
import com.apitable.template.vo.RecommendVo;
import com.apitable.template.vo.TemplateCategoryContentVo;
import com.apitable.template.vo.TemplateCategoryMenuVo;
import com.apitable.template.vo.TemplateDirectoryVo;
import com.apitable.template.vo.TemplateVo;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * Template Service.
 * </p>
 */
public interface ITemplateService extends IService<TemplateEntity> {

    /**
     * Get space id by template id.
     */
    String getSpaceId(String templateId);

    /**
     * Verify the requirements for creating a template node.
     */
    void checkTemplateForeignNode(Long memberId, String nodeId);

    /**
     * Verify the requirements for creating a folder template node.
     */
    void checkFolderTemplate(List<String> subNodeIds, Long memberId);

    /**
     * Verify the requirements for creating a table template node.
     */
    void checkDatasheetTemplate(List<String> nodeIds, Boolean isBuildNodeName,
                                TemplateException templateException);

    /**
     * Verify that the collection table or mirror is associated with the foreign table.
     */
    void checkFormOrMirrorIsForeignNode(List<String> subNodeIds,
                                        Map<Integer, List<String>> nodeTypeToNodeIdsMap,
                                        int nodeType, TemplateException templateException);

    /**
     * Checklist all field permissions.
     */
    void checkFieldPermission(Long memberId, String nodeId);

    /**
     * Create template.
     */
    String create(Long userId, String spaceId, CreateTemplateRo ro);

    /**
     * Delete template.
     */
    void delete(Long userId, String templateId);

    /**
     * Get recommend view.
     */
    RecommendVo getRecommend(String lang);

    /**
     * Get official template category list.
     */
    List<TemplateCategoryMenuVo> getTemplateCategoryList(String lang);

    /**
     * Get template category content view.
     */
    TemplateCategoryContentVo getTemplateCategoryContentVo(String categoryCode);

    /**
     * Get template view list.
     *
     * @param spaceId      space id
     * @param categoryCode template category code(no require)
     * @param templateIds  template id list(no require)
     * @param isPrivate    whether it is a private template in the space station
     * @return TemplateVo List
     */
    List<TemplateVo> getTemplateVoList(String spaceId, String categoryCode,
                                       List<String> templateIds, Boolean isPrivate);

    /**
     * Get template directory view.
     *
     * @param categoryCode template category code(no require)
     * @param templateId   template id
     * @param isPrivate    whether it is a private template in the space station
     * @param lang         language
     * @return TemplateDirectoryVo
     */
    TemplateDirectoryVo getDirectoryVo(String categoryCode, String templateId, Boolean isPrivate,
                                       String lang);

    /**
     * Get default template node id.
     */
    String getDefaultTemplateNodeId();

    /**
     * Get template node ids.
     *
     * @param spaceId       space id
     * @param templateIds   template ids
     * @return node ids
     * @author Chambers
     */
    List<String> getTemplateNodeIds(String spaceId, List<String> templateIds);

    /**
     * fuzzy search template related content.
     */
    TemplateSearchDTO globalSearchTemplate(String lang, String keyword, String className);

    /**
     * Get all node id list inside the template.
     */
    List<String> getNodeIdsByTemplateId(String templateId);
}
