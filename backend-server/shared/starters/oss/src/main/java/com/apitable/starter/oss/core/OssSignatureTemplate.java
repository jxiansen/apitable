

package com.apitable.starter.oss.core;

import cn.hutool.core.date.DateUtil;
import com.qiniu.cdn.CdnManager;
import com.qiniu.common.QiniuException;
import java.time.Instant;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * oss signature template.
 */
public class OssSignatureTemplate {

    private String encryptKey;

    private Integer expireSecond;

    public OssSignatureTemplate() {
    }

    public OssSignatureTemplate(String encryptKey, Integer expireSecond) {
        this.encryptKey = encryptKey;
        this.expireSecond = expireSecond;
    }

    public String getSignatureUrl(String host, String fileName) {
        return this.getSignatureUrl(host, fileName, Long.valueOf(expireSecond));
    }

    /**
     * Get the signed URL of the file.
     *
     * @param host     domain name
     * @param fileName file name
     * @param expires  expiration time
     * @return signed URL
     */
    public String getSignatureUrl(String host, String fileName, Long expires) {
        fileName = regexSignatureUrl(fileName);
        // timestamp anti leech
        try {
            Date expireDate = Date.from(Instant.now().plusSeconds(expires));
            return CdnManager.createTimestampAntiLeechUrl(host, fileName, null,
                encryptKey, DateUtil.toInstant(expireDate).getEpochSecond());
        } catch (QiniuException e) {
            // ignore
            return null;
        }
    }

    /**
     * Regularly signed URL，
     * Remove the domain name part and the question mark and its following content in the file name.
     *
     * @param fileName file name
     * @return regular signed URL
     */
    public String regexSignatureUrl(String fileName) {
        // Create the first regular expression pattern to match the domain name part
        String domainRegex = "https://[^/]+/";
        Pattern pattern = Pattern.compile(domainRegex);

        // Create Matcher object
        Matcher matcher = pattern.matcher(fileName);

        // Replace the matching domain name part with an empty string
        String result = matcher.replaceAll("");

        String questionMarkRegex = "\\?.*";
        pattern = Pattern.compile(questionMarkRegex);

        matcher = pattern.matcher(result);

        // Replace the matching question mark and its following content with an empty string
        result = matcher.replaceAll("");
        return result;
    }
}
