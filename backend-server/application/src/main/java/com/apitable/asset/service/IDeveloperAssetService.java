

package com.apitable.asset.service;

import com.apitable.asset.entity.DeveloperAssetEntity;
import com.apitable.asset.enums.DeveloperAssetType;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * Workbench-Developer Attachment Table Service Class.
 */
public interface IDeveloperAssetService extends IService<DeveloperAssetEntity> {

    /**
     * Create a developer resource reference.
     *
     * @param assetId            resource id
     * @param createdBy          creator
     * @param assetChecksum      resource file checksum
     * @param developerAssetType resource type
     * @param originalFileName   resource source file
     * @param fileSize           resource size
     */
    void saveAssetInDeveloper(Long assetId, Long createdBy, String assetChecksum,
                              DeveloperAssetType developerAssetType, String originalFileName,
                              long fileSize);

}
