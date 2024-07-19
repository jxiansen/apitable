

package com.apitable.interfaces.widget.facade;

import com.apitable.widget.ro.WidgetStoreListRo;
import com.apitable.widget.vo.WidgetStoreListInfo;
import java.util.List;

/**
 * widget service audit facade.
 */
public interface WidgetServiceAuditFacade {

    List<WidgetStoreListInfo> getWaitReviewWidgetList(WidgetStoreListRo body);
}
