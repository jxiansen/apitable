

package com.apitable.widget.service;

import com.apitable.base.model.WidgetAssetUploadCertificateRO;
import com.apitable.base.model.WidgetUploadMetaVo;
import com.apitable.base.model.WidgetUploadTokenVo;
import java.util.List;

/**
 * widget upload service.
 */
public interface IWidgetUploadService {

    /**
     * batch create widget asset pre-signed url.
     *
     * @param userId    user id
     * @param packageId widget package id
     * @param data      widget uploadData
     * @return AssetUploadTokenVo
     */
    List<WidgetUploadTokenVo> createWidgetAssetPreSignedUrl(Long userId,
                                                            String packageId,
                                                            WidgetAssetUploadCertificateRO data);

    /**
     * get widget upload meta.
     *
     * @return WidgetUploadMetaVo
     */
    WidgetUploadMetaVo getWidgetUploadMetaVo();
}
