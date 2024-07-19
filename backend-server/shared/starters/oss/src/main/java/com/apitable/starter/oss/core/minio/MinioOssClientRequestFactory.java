

package com.apitable.starter.oss.core.minio;

import com.apitable.starter.oss.core.OssClientRequest;
import com.apitable.starter.oss.core.OssClientRequestFactory;
import io.minio.MinioClient;

/**
 * minio oss client request factory.
 */
public class MinioOssClientRequestFactory implements OssClientRequestFactory {

    private final String endpoint;

    private final String accessKey;

    private final String secretKey;

    private final String bucketPolicyJson;

    /**
     * constructor.
     *
     * @param endpoint         minio endpoint
     * @param accessKey        access key
     * @param secretKey        secret key
     * @param bucketPolicyJson bucket policy json
     */
    public MinioOssClientRequestFactory(String endpoint, String accessKey, String secretKey,
                                        String bucketPolicyJson) {
        this.endpoint = endpoint;
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.bucketPolicyJson = bucketPolicyJson;
    }

    @Override
    public OssClientRequest createClient() {
        MinioClient minioClient =
            MinioClient.builder()
                .endpoint(endpoint)
                .credentials(accessKey, secretKey)
                .build();
        return new MinioOssClientRequest(minioClient, true, bucketPolicyJson);
    }
}
