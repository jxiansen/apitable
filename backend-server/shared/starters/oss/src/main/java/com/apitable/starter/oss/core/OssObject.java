

package com.apitable.starter.oss.core;

import java.io.InputStream;

/**
 * <p>
 * Oss object.
 * </p>
 */
public class OssObject {

    private String contentDigest;

    private Long contentLength;

    private String contentType;

    private InputStream inputStream;

    /**
     * <p>
     * Constructor for OssObject.
     * </p>
     *
     * @param contentDigest a {@link java.lang.String} object.
     * @param contentLength a {@link java.lang.Long} object.
     * @param contentType   a {@link java.lang.String} object.
     * @param inputStream   a {@link java.io.InputStream} object.
     */
    public OssObject(String contentDigest, Long contentLength, String contentType,
                     InputStream inputStream) {
        this.contentDigest = contentDigest;
        this.contentLength = contentLength;
        this.contentType = contentType;
        this.inputStream = inputStream;
    }

    public String getContentDigest() {
        return contentDigest;
    }

    public void setContentDigest(String contentDigest) {
        this.contentDigest = contentDigest;
    }

    public Long getContentLength() {
        return contentLength;
    }

    public void setContentLength(Long contentLength) {
        this.contentLength = contentLength;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public InputStream getInputStream() {
        return inputStream;
    }

    public void setInputStream(InputStream inputStream) {
        this.inputStream = inputStream;
    }

    @Override
    public String toString() {
        return "OssObject{"
            + "contentDigest='" + contentDigest + '\''
            + ", contentLength=" + contentLength
            + ", contentType='" + contentType + '\''
            + '}';
    }
}
