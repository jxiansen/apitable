

package com.apitable.widget.mapper;

import com.apitable.widget.dto.LastSubmitWidgetVersionDTO;
import com.apitable.widget.entity.WidgetPackageReleaseEntity;
import com.apitable.widget.ro.WidgetStoreListRo;
import com.apitable.widget.vo.WidgetReleaseListVo;
import com.apitable.widget.vo.WidgetStoreListInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * widget package release mapper.
 */
public interface WidgetPackageReleaseMapper extends BaseMapper<WidgetPackageReleaseEntity> {

    /**
     * query whether the published version sha exists.
     *
     * @param releaseSha    release version sha
     * @param releaseStatus release status
     * @return release version data id
     */
    Long selectReleaseShaToId(@Param("releaseSha") String releaseSha,
                              @Param("releaseStatus") Integer releaseStatus);

    /**
     * query release version list.
     *
     * @param page      page object
     * @param packageId widget package ids
     * @return page result
     */
    IPage<WidgetReleaseListVo> selectReleasePage(Page<WidgetReleaseListVo> page,
                                                 @Param("packageId") String packageId);

    /**
     * query the list of applets to be reviewed.
     *
     * @param condition condition
     * @return list to be reviewed
     */
    List<WidgetStoreListInfo> selectWaitReviewWidgetList(
        @Param("condition") WidgetStoreListRo condition);

    /**
     * Query the last submitted applet version information according to the parent widget ID.
     *
     * @param fatherWidgetId fatherWidgetId
     * @return LastSubmitWidgetVersionDTO
     */
    LastSubmitWidgetVersionDTO selectLastWidgetVersionInfoByFatherWidgetId(
        @Param("fatherWidgetId") String fatherWidgetId);

    /**
     * query by father widget id and status.
     *
     * @param fatherWidgetId father widget id
     * @param version        version
     * @return pending approval widget version
     */
    WidgetPackageReleaseEntity selectByFatherWidgetIdAndVersion(
        @Param("fatherWidgetId") String fatherWidgetId, @Param("version") String version);

}
