

package com.apitable.starter.oss.core;

/**
 * oss file property object.
 */
public class OssStatObject {

    /**
     * resource key (file relative path).
     */
    private String key;

    /**
     * hash.
     */
    private String hash;

    /**
     * file size.
     */
    private long fileSize;

    /**
     * file mimeType.
     */
    private String mimeType;

    /**
     * constructor.
     *
     * @param key      resource key (file relative path).
     * @param hash     hash.
     * @param fileSize file size.
     * @param mimeType file mimeType.
     */
    public OssStatObject(String key, String hash, long fileSize, String mimeType) {
        this.key = key;
        this.hash = hash;
        this.fileSize = fileSize;
        this.mimeType = mimeType;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public long getFileSize() {
        return fileSize;
    }

    public void setFileSize(long fileSize) {
        this.fileSize = fileSize;
    }

    public String getMimeType() {
        return mimeType;
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

}
