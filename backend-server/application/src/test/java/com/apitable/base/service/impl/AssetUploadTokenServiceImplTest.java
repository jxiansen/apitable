

package com.apitable.base.service.impl;

import static org.assertj.core.api.Assertions.assertThatCode;

import com.apitable.AbstractIntegrationTest;
import com.apitable.asset.enums.AssetType;
import com.apitable.core.exception.BusinessException;
import org.junit.jupiter.api.Test;

public class AssetUploadTokenServiceImplTest extends AbstractIntegrationTest {

    @Test
    public void testCreateSpaceAssetPreSignedUrlParameterException() {
        assertThatCode(() -> iAssetUploadTokenService.createSpaceAssetPreSignedUrl(null, null, AssetType.DATASHEET.getValue(), 1)).isInstanceOf(BusinessException.class);

        assertThatCode(() -> iAssetUploadTokenService.createSpaceAssetPreSignedUrl(null, "", AssetType.DATASHEET.getValue(), 101)).isInstanceOf(BusinessException.class);
    }
}