

package com.apitable.starter.oss.core;

import java.io.IOException;
import java.io.InputStream;
import java.util.function.Consumer;

/**
 * oss client request.
 */
public interface OssClientRequest {

    /**
     * upload remote url to oss.
     *
     * @param bucketName   bucket name
     * @param remoteSrcUrl remote url
     * @param keyPath      key path
     * @return UrlFetchResponse
     * @throws IOException IOException
     */
    UrlFetchResponse uploadRemoteUrl(String bucketName, String remoteSrcUrl, String keyPath)
        throws IOException;

    /**
     * upload remote url to oss.
     *
     * @param bucketName bucket name
     * @param in         input stream
     * @param keyPath    key path
     * @throws IOException IOException
     */
    void uploadStreamForObject(String bucketName, InputStream in, String keyPath)
        throws IOException;

    /**
     * upload stream to oss.
     *
     * @param bucketName bucket name
     * @param in         input stream
     * @param path       path
     * @param mimeType   mime type
     * @param digest     digest
     * @throws IOException IOException
     */
    void uploadStreamForObject(String bucketName, InputStream in, String path, String mimeType,
                               String digest) throws IOException;

    /**
     * get object.
     *
     * @param bucketName bucket name
     * @param path       path
     * @return OssObject
     */
    OssObject getObject(String bucketName, String path);

    /**
     * get stat object.
     *
     * @param bucketName bucket name
     * @param key        key
     * @return OssStatObject
     */
    OssStatObject getStatObject(String bucketName, String key);

    /**
     * execute stream function.
     *
     * @param bucketName bucket name
     * @param key        key
     * @param function   function
     */
    void executeStreamFunction(String bucketName, String key, Consumer<InputStream> function);

    /**
     * delete object.
     *
     * @param bucketName bucket name
     * @param key        key
     * @return boolean
     */
    boolean deleteObject(String bucketName, String key);

    /**
     * refresh cdn.
     *
     * @param bucketName bucket name
     * @param url        url
     */
    void refreshCdn(String bucketName, String[] url);

    /**
     * upload token.
     *
     * @param bucket       bucket
     * @param key          key
     * @param expires      expires time
     * @param uploadPolicy upload policy
     * @return OssUploadAuth
     */
    OssUploadAuth uploadToken(String bucket, String key, long expires,
                              OssUploadPolicy uploadPolicy);

    /**
     * validate callback.
     *
     * @param originAuthorization origin authorization
     * @param url                 url
     * @param body                body
     * @param contentType         content type
     * @return boolean
     */
    boolean isValidCallback(String originAuthorization, String url, byte[] body,
                            String contentType);

    /**
     * migration resources.
     *
     * @param sourceBucket source bucket
     * @param targetBucket target bucket
     * @param resourceKey  resource key
     */
    void migrationResources(String sourceBucket, String targetBucket, String resourceKey);

}
