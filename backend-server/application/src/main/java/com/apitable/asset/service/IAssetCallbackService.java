

package com.apitable.asset.service;

import com.apitable.asset.enums.AssetType;
import com.apitable.asset.vo.AssetUploadResult;
import java.util.List;

/**
 * Asset Upload Callback Service.
 *
 * @author Pengap
 */
public interface IAssetCallbackService {

    /**
     * asset callback notify after complete upload.
     *
     * @param assetType    assert type
     * @param resourceKeys resource key list
     * @return AssetUploadResults
     * @author Chambers
     */
    List<AssetUploadResult> loadAssetUploadResult(AssetType assetType,
                                                  List<String> resourceKeys);

    /**
     * widget upload callback.
     *
     * @param resourceKeys file urls
     */
    void widgetCallback(List<String> resourceKeys);
}
