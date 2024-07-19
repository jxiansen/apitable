

package com.apitable.workspace.mapper;

import com.apitable.workspace.dto.DatasheetWidgetDTO;
import com.apitable.workspace.entity.DatasheetWidgetEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * datasheet widget mapper.
 */
public interface DatasheetWidgetMapper extends BaseMapper<DatasheetWidgetEntity> {

    /**
     * query by widget id.
     *
     * @param widgetId widget id
     * @return DatasheetWidgetEntity
     */
    DatasheetWidgetEntity selectByWidgetId(@Param("widgetId") String widgetId);

    /**
     * query by datasheet id.
     *
     * @param dstId datasheet id
     * @return DatasheetWidgetEntity
     */
    DatasheetWidgetEntity selectByDstId(@Param("dstId") String dstId);

    /**
     * query by widget ids.
     *
     * @param widgetIds widget ids
     * @return datasheetWidgetDTOs
     */
    List<DatasheetWidgetDTO> selectDtoByWidgetIds(@Param("list") Collection<String> widgetIds);

    /**
     * insert batch.
     *
     * @param entities datasheet's widgets
     * @return affected rows
     */
    int insertBatch(@Param("entities") List<DatasheetWidgetEntity> entities);

    /**
     * query by dst id.
     *
     * @param dstIds dst id
     * @return list of widget id
     */
    List<String> selectWidgetIdByDstIds(@Param("dstIds") List<String> dstIds);
}
