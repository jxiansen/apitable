

package com.apitable.widget.mapper;

import com.apitable.widget.entity.WidgetPackageAuthSpaceEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * widget package auth space mapper.
 */
public interface WidgetPackageAuthSpaceMapper extends BaseMapper<WidgetPackageAuthSpaceEntity> {

    /**
     * query space id by widget package id.
     *
     * @param packageId widget package id
     * @return the space id bound by the widget package id
     */
    String selectSpaceIdByPackageId(@Param("packageId") String packageId);

}
