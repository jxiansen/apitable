

package com.apitable.asset.service;

import com.apitable.asset.vo.AssetUploadCertificateVO;
import com.apitable.asset.vo.AssetUrlSignatureVo;
import java.util.List;


/**
 * Asset Upload Credentials Service.
 */
public interface IAssetUploadTokenService {

    /**
     * Get signature url.
     *
     * @param fileName file name
     * @return url
     * @author Chambers
     */
    String getSignatureUrl(String fileName);

    /**
     * Get asset url signature vos.
     *
     * @param fileNames file names
     * @return List of AssetUrlSignatureVo
     * @author Chambers
     */
    List<AssetUrlSignatureVo> getAssetUrlSignatureVos(List<String> fileNames);

    /**
     * create public asset pre-signed url.
     *
     * @return AssetUploadCertificateVO
     */
    AssetUploadCertificateVO createPublishAssetPreSignedUrl();

    /**
     * batch create space asset pre-signed url.
     *
     * @param userId    user id
     * @param nodeId    node id
     * @param assetType asset type
     * @param count     created count
     * @return AssetUploadCertificateVO
     */
    List<AssetUploadCertificateVO> createSpaceAssetPreSignedUrl(Long userId,
                                                                String nodeId, int assetType,
                                                                int count);
}
