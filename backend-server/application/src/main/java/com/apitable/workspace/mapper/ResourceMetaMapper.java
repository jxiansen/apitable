

package com.apitable.workspace.mapper;

import com.apitable.workspace.entity.ResourceMetaEntity;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * resource meta mapper.
 */
public interface ResourceMetaMapper {

    /**
     * query by resource id list.
     *
     * @param resourceIds resource ids
     * @return metas
     */
    List<ResourceMetaEntity> selectByResourceIds(@Param("list") Collection<String> resourceIds);

    /**
     * query meta by resource id.
     *
     * @param resourceId resource id
     * @return meta
     */
    String selectMetaDataByResourceId(@Param("resourceId") String resourceId);

    /**
     * batch insert.
     *
     * @param entities resource metas
     * @return affected rows
     */
    int insertBatch(@Param("entities") Collection<ResourceMetaEntity> entities);

    /**
     * count the number of dashboard widget.
     *
     * @param dashboardId dashboard id
     */
    Integer countDashboardWidgetNumber(@Param("dashboardId") String dashboardId);
}
