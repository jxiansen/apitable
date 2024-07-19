

package com.apitable.asset.service.impl;

import com.apitable.asset.entity.DeveloperAssetEntity;
import com.apitable.asset.enums.DeveloperAssetType;
import com.apitable.asset.mapper.DeveloperAssetMapper;
import com.apitable.asset.service.IDeveloperAssetService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * Workbench-Developer Attachment Table Service Implementation Class.
 */
@Slf4j
@Service
public class DeveloperAssetServiceImpl
    extends ServiceImpl<DeveloperAssetMapper, DeveloperAssetEntity>
    implements IDeveloperAssetService {

    @Override
    public void saveAssetInDeveloper(Long assetId, Long createdBy, String assetChecksum,
                                     DeveloperAssetType developerAssetType, String originalFileName,
                                     long fileSize) {
        log.info("Added developer attachment record");
        DeveloperAssetEntity entity = DeveloperAssetEntity.builder()
            .assetId(assetId)
            .assetChecksum(assetChecksum)
            .type(developerAssetType.getValue())
            .sourceName(originalFileName)
            .fileSize((int) fileSize)
            .createdBy(createdBy)
            .build();
        this.save(entity);
    }

}
