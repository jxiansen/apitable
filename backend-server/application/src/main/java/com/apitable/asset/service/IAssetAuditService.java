

package com.apitable.asset.service;

import com.apitable.asset.entity.AssetAuditEntity;
import com.apitable.asset.ro.AssetsAuditRo;
import com.apitable.asset.ro.AttachAuditCallbackRo;
import com.apitable.asset.vo.AssetsAuditVo;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * Resource Audit Form Service Class.
 */
public interface IAssetAuditService extends IService<AssetAuditEntity> {

    /**
     * Create resource audit records.
     *
     * @param assetId    resource ID
     * @param checksum   resource summary
     * @param uploadPath resource storage path
     */
    void create(Long assetId, String checksum, String uploadPath);

    /**
     * Callback for audit result processing.
     *
     * @param result callback result
     */
    void auditCallback(AttachAuditCallbackRo result);

    /**
     * Query the list of pictures to be reviewed manually.
     *
     * @param page pagination parameters
     * @return List of AssetsAuditVo
     */
    IPage<AssetsAuditVo> readReviews(Page page);

    /**
     * Submit audit results.
     *
     * @param results Submit audit results
     */
    void submitAuditResult(AssetsAuditRo results);
}
