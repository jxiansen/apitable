

package com.apitable.widget.service;

import com.apitable.widget.ro.WidgetCreateRo;
import com.apitable.widget.ro.WidgetStoreListRo;
import com.apitable.widget.vo.WidgetInfo;
import com.apitable.widget.vo.WidgetPack;
import com.apitable.widget.vo.WidgetStoreListInfo;
import com.apitable.workspace.dto.DatasheetWidgetDTO;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * widget service interface.
 */
public interface IWidgetService {

    /**
     * Get space widget count.
     *
     * @param spaceId space id
     * @return count
     * @author Chambers
     */
    Long getSpaceWidgetCount(String spaceId);

    /**
     * get widget sorted list.
     *
     * @param userId      user id
     * @param spaceId     space id
     * @param storeListRo request parameters
     * @return WidgetPackageInfos
     */
    List<WidgetStoreListInfo> widgetStoreList(Long userId, String spaceId,
                                              WidgetStoreListRo storeListRo);

    /**
     * Gets the component information in the specified space.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @param count    load quantity
     * @return WidgetInfos
     */
    List<WidgetInfo> getWidgetInfoList(String spaceId, Long memberId, Integer count);

    /**
     * create widget.
     *
     * @param userId  user id
     * @param spaceId space id
     * @param widget  widget
     * @return widgetId
     */
    String create(Long userId, String spaceId, WidgetCreateRo widget);

    /**
     * copy widget.
     *
     * @param userId    user id
     * @param spaceId   space id
     * @param nodeId    nodeId
     * @param widgetIds widgetIds
     * @return WidgetPack
     */
    Collection<String> copyWidget(Long userId, String spaceId, String nodeId,
                                  List<String> widgetIds);

    /**
     * copy widget batch.
     *
     * @param userId              user id
     * @param destSpaceId         destSpaceId
     * @param newNodeMap          Original node ID-newly created node ID MAP
     * @param newWidgetIdMap      Original component ID-newly created component ID MAP
     * @param newWidgetIdToDstMap Newly Created Component ID-Data Source Table ID MAP
     */
    void copyBatch(Long userId, String destSpaceId, Map<String, String> newNodeMap,
                   Map<String, String> newWidgetIdMap,
                   Map<String, DatasheetWidgetDTO> newWidgetIdToDstMap);

    /**
     * batch check wiget.
     *
     * @param widgetIds widgetIds
     * @return spaceId
     */
    String checkByWidgetIds(List<String> widgetIds);

    /**
     * get widget pack.
     *
     * @param widgetId widget id
     * @return WidgetPack
     */
    WidgetPack getWidgetPack(String widgetId);

    /**
     * get widget pack list.
     *
     * @param widgetIds widgetIds
     * @return WidgetPacks
     */
    List<WidgetPack> getWidgetPackList(Collection<String> widgetIds);

    /**
     * get space id by widget id.
     *
     * @param widgetId widget id
     * @return space id
     */
    String getSpaceIdByWidgetId(String widgetId);

    /**
     * check widget reference.
     *
     * @param subNodeIds subNodeIds
     * @param widgetIds  widget id list
     */
    void checkWidgetReference(List<String> subNodeIds, List<String> widgetIds);

    /**
     * get widget resources.
     *
     * @param widgetIds widget id list
     * @return node ids
     */
    List<String> getWidgetNodeIds(List<String> widgetIds);

    /**
     * get node widgets.
     *
     * @param nodeIds node id.
     * @return list of widget id
     */
    List<String> getNodeWidgetIds(List<String> nodeIds);
}
