

package com.apitable.shared.cache.service;

import com.apitable.shared.cache.bean.SpaceAssetDTO;

/**
 * <p>
 * resource cache service.
 * </p>
 *
 * @author Chambers
 */
public interface AssetCacheService {

    /**
     * get space resource cache information.
     *
     * @param key resource key
     * @return SpaceAssetDTO
     */
    SpaceAssetDTO getSpaceAssetDTO(String key);

    /**
     * save space resource cache information.
     *
     * @param key           resource key
     * @param spaceAssetDTO space resource dto
     * @param expireSecond  expire time (unit：second)
     */
    void save(String key, SpaceAssetDTO spaceAssetDTO, int expireSecond);
}
