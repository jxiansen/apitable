

package com.apitable.starter.oss.core.qiniu;

import com.apitable.starter.oss.autoconfigure.OssProperties.Callback;
import com.apitable.starter.oss.core.OssClientRequest;
import com.apitable.starter.oss.core.OssClientRequestFactory;
import com.apitable.starter.oss.core.OssSignatureTemplate;
import com.qiniu.util.Auth;

/**
 * qiniu oss client request factory.
 */
public class QiniuOssClientRequestFactory implements OssClientRequestFactory {

    private final Auth auth;

    private final String regionId;

    private final String downloadDomain;

    private final String uploadUrl;

    private final Callback callback;

    private final OssSignatureTemplate ossSignatureTemplate;

    /**
     * constructor.
     *
     * @param auth auth
     * @param regionId region id
     * @param downloadDomain download domain
     * @param callback callback
     * @param uploadUrl upload url
     * @param ossSignatureTemplate oss signature template
     */
    public QiniuOssClientRequestFactory(Auth auth, String regionId,
        String downloadDomain, Callback callback, String uploadUrl, OssSignatureTemplate ossSignatureTemplate) {
        this.auth = auth;
        this.regionId = regionId;
        this.downloadDomain = downloadDomain;
        this.callback = callback;
        this.uploadUrl = uploadUrl;
        this.ossSignatureTemplate = ossSignatureTemplate;
    }

    @Override
    public OssClientRequest createClient() {
        return new QiniuOssClientRequest(auth, regionId, downloadDomain, callback,
            uploadUrl, true, ossSignatureTemplate);
    }
}
