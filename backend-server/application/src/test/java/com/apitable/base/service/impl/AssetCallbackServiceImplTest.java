

package com.apitable.base.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;

import com.apitable.AbstractIntegrationTest;
import com.apitable.asset.entity.AssetEntity;
import com.apitable.asset.enums.AssetType;
import com.apitable.asset.vo.AssetUploadResult;
import com.apitable.core.exception.BusinessException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.junit.jupiter.api.Test;

public class AssetCallbackServiceImplTest extends AbstractIntegrationTest {

    @Test
    public void testLoadAssetUploadResultUsingPublicAsset() {
        List<String> resourceKeys = Collections.singletonList("public/2022/08/20/111");
        List<AssetUploadResult> results =
            iAssetCallbackService.loadAssetUploadResult(AssetType.USER_AVATAR, resourceKeys);
        assertThat(results).isNotEmpty().hasSize(1);
    }

    @Test
    public void testLoadAssetUploadResultUsingNoExistAsset() {
        List<String> resourceKeys = Collections.singletonList("space/2022/08/20/111");
        assertThatCode(() -> iAssetCallbackService.loadAssetUploadResult(AssetType.DATASHEET,
            resourceKeys)).isInstanceOf(BusinessException.class);
    }

    @Test
    public void testLoadAssetUploadResultUsingDatasheetAsset() {
        List<AssetEntity> assetEntities = new ArrayList<>();
        assetEntities.add(AssetEntity.builder()
            .bucket("QNY1")
            .checksum("DekwyNBgUj3Shi1FzCfl1A==")
            .fileSize(658436)
            .fileUrl("space/2022/03/22/cc3737c2aef54d499502f4941ab81841")
            .mimeType("image/png")
            .extensionName("png")
            .isTemplate(false)
            .build());

        iAssetService.saveBatch(assetEntities);

        List<String> resourceKeys = new ArrayList<>();
        resourceKeys.add("space/2022/03/22/cc3737c2aef54d499502f4941ab81841");
        List<AssetUploadResult> results =
            iAssetCallbackService.loadAssetUploadResult(AssetType.DATASHEET, resourceKeys);
        assertThat(results).isNotEmpty().hasSize(1);
    }
}