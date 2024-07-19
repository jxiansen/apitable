

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;


/**
 * Asset upload callback Body.
 *
 * @author Pengap
 */
@Data
@Schema(description = "Asset upload callback Body")
public class AssetUploadCallbackBody {

    /**
     * Get the resource name of the file saved in the space.
     */
    private String key;

    /**
     * The HTTPETag after the file is uploaded successfully. * If the resource ID is not specified
     * when uploading, * the Etag will be used as the resource ID.
     */
    private String hash;

    /**
     * Get the upload target space name.
     */
    private String bucket;

    /**
     * Uploaded original filename.
     */
    private String fname;

    /**
     * Resource size, in bytes.
     */
    private Long fsize;

    /**
     * Resource type, for example, the resource type of a JPG image is imagejpg.
     */
    private String mimeType;

    /**
     * the width of the image.
     */
    private Integer imageWidth;

    /**
     * the height of the picture.
     */
    private Integer imageHeight;

    /**
     * upload asset id.
     */
    private Long uploadAssetId;

    /**
     * space id.
     */
    private String spaceId;

    /**
     * node id.
     */
    private String nodeId;

    /**
     * bucket type.
     */
    private String bucketType;

    /**
     * asset type.
     */
    private Integer assetType;

}
