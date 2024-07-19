

package com.apitable.starter.oss.core.obs;

import com.apitable.starter.oss.core.OssClientRequest;
import com.apitable.starter.oss.core.OssClientRequestFactory;
import com.obs.services.ObsClient;

/**
 * obs Client Request Construction Factory.
 */
public class HuaweiCloudOssClientRequestFactory implements OssClientRequestFactory {

    private final String ak;
    private final String sk;
    private final String endpoint;

    /**
     * constructor.
     *
     * @param ak       access key
     * @param sk       secret key
     * @param endpoint endpoint
     */
    public HuaweiCloudOssClientRequestFactory(String ak, String sk, String endpoint) {
        this.ak = ak;
        this.sk = sk;
        this.endpoint = endpoint;
    }

    @Override
    public OssClientRequest createClient() {
        ObsClient obsClient = new ObsClient(ak, sk, endpoint);
        return new HuaweiCloudOssClientRequest(obsClient, true);
    }
}
