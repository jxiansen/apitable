

package com.apitable.asset.service;

import com.apitable.asset.entity.AssetEntity;
import com.apitable.asset.enums.AssetType;
import com.apitable.asset.enums.DeveloperAssetType;
import com.apitable.asset.ro.AttachUrlOpRo;
import com.apitable.asset.vo.AssetUploadResult;
import com.baomidou.mybatisplus.extension.service.IService;
import java.io.InputStream;
import java.util.List;

/**
 * Basics - Attachment Table Service Class.
 */
public interface IAssetService extends IService<AssetEntity> {

    /**
     * upload pre check.
     *
     * @param nodeId Node ID
     * @param secret Human verification secret
     */
    void checkBeforeUpload(String nodeId, String secret);

    /**
     * Upload resource files to the space and calculate the capacity.
     *
     * @param nodeId           node id
     * @param in               resource file stream
     * @param fileOriginalName file source name
     * @param fileSize         file resource size
     * @param mimeType         file type
     * @param assetType        resource type
     * @return AssetUploadResult
     */
    AssetUploadResult uploadFileInSpace(String nodeId, InputStream in,
                                        String fileOriginalName, long fileSize, String mimeType,
                                        AssetType assetType);

    /**
     * upload remote url.
     *
     * @param url network resource address
     * @return AssetUploadResult
     */
    AssetUploadResult uploadRemoteUrl(String url);

    /**
     * Simple upload of resource files, not included in the space capacity.
     *
     * @param in          resource file stream
     * @param fileSize    file resource size
     * @param contentType resource file type
     * @return AssetUploadResult
     */
    AssetUploadResult uploadFile(InputStream in, long fileSize, String contentType);

    /**
     * Upload resource files to developer space and calculate capacity.
     *
     * @param in                 resource file stream
     * @param uploadPath         upload file full path
     * @param fileOriginalName   file source name
     * @param fileSize           file resource size
     * @param contentType        file type
     * @param createdBy          uploader
     * @param developerAssetType resource type
     * @return AssetUploadResult
     */
    AssetUploadResult uploadFileInDeveloper(InputStream in, String uploadPath,
                                            String fileOriginalName, long fileSize,
                                            String contentType,
                                            Long createdBy, DeveloperAssetType developerAssetType);

    /**
     * delete cloud s3 files.
     *
     * @param token cloud key
     */
    void delete(String token);

    /**
     * attachment url upload.
     *
     * @param attachOpRo attachment parameters
     * @return AttachVo attachment vo
     */
    AssetUploadResult urlUpload(AttachUrlOpRo attachOpRo);

    /**
     * upload third party avatars.
     *
     * @param avatarUrl third party avatar address
     * @return upload completed url
     */
    String downloadAndUploadUrl(String avatarUrl);

    /**
     * modify the template state of resource.
     *
     * @param assetIds   asset table ids
     * @param isTemplate whether it is a template attachment status
     * @return real updated asset checksum list
     */
    List<String> updateAssetTemplateByIds(List<Long> assetIds, Boolean isTemplate);
}
