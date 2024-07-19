

package com.apitable.interfaces.widget.facade;

import com.apitable.widget.ro.WidgetStoreListRo;
import com.apitable.widget.vo.WidgetStoreListInfo;
import java.util.ArrayList;
import java.util.List;

/**
 * default widget service audit facade implements.
 */
public class DefaultWidgetServiceAuditFacadeImpl implements WidgetServiceAuditFacade {

    @Override
    public List<WidgetStoreListInfo> getWaitReviewWidgetList(WidgetStoreListRo body) {
        return new ArrayList<>();
    }
}
