

package com.apitable.workspace.service.impl;

import com.apitable.workspace.entity.DatasheetWidgetEntity;
import com.apitable.workspace.mapper.DatasheetWidgetMapper;
import com.apitable.workspace.service.IDatasheetWidgetService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * datasheet widget service implement.
 */
@Service
public class DatasheetWidgetServiceImpl
    extends ServiceImpl<DatasheetWidgetMapper, DatasheetWidgetEntity>
    implements IDatasheetWidgetService {

    @Resource
    private DatasheetWidgetMapper datasheetWidgetMapper;

    @Override
    public DatasheetWidgetEntity getByWidgetId(String widgetId) {
        return datasheetWidgetMapper.selectByWidgetId(widgetId);
    }

    @Override
    public void create(String spaceId, String dstId, String widgetId, String sourceId) {
        DatasheetWidgetEntity datasheetWidget = new DatasheetWidgetEntity();
        datasheetWidget.setSpaceId(spaceId);
        datasheetWidget.setDstId(dstId);
        datasheetWidget.setWidgetId(widgetId);
        datasheetWidget.setSourceId(sourceId);
        save(datasheetWidget);
    }
}
