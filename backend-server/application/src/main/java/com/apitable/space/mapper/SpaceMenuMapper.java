

package com.apitable.space.mapper;

import com.apitable.space.entity.SpaceMenuEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * space menu mapper.
 */
public interface SpaceMenuMapper extends BaseMapper<SpaceMenuEntity> {

    /**
     * query by menu codes.
     *
     * @param menuCodes menu codes
     * @return space menus
     */
    List<SpaceMenuEntity> selectByMenuCodes(@Param("menuCodes") List<String> menuCodes);
}
