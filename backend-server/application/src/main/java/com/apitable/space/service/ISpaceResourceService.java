

package com.apitable.space.service;

import com.apitable.space.entity.SpaceResourceEntity;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * space resource service.
 */
public interface ISpaceResourceService extends IService<SpaceResourceEntity> {

    /**
     * Query whether the resource code contains unassigned resource code.
     *
     * @param resourceCodes resource code
     */
    void checkResourceAssignable(List<String> resourceCodes);
}
