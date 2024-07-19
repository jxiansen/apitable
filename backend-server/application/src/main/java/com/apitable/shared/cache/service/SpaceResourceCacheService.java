

package com.apitable.shared.cache.service;

import com.apitable.shared.cache.bean.SpaceMenuResourceGroupDto;
import java.util.List;

/**
 * <p>
 * space resource service.
 * </p>
 *
 * @author Shawn Deng
 */
public interface SpaceResourceCacheService {

    /**
     * resource structured data.
     *
     * @return space menu resource group
     */
    List<SpaceMenuResourceGroupDto> getMenuResourceGroup();
}
