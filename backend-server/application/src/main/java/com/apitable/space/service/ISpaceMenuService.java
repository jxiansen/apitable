

package com.apitable.space.service;

import com.apitable.space.entity.SpaceMenuEntity;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * space menu service.
 */
public interface ISpaceMenuService extends IService<SpaceMenuEntity> {

    /**
     * get entity by menu code.
     *
     * @param menuCode menuCode
     * @return SpaceMenuEntity
     */
    SpaceMenuEntity findByMenuCode(String menuCode);
}
