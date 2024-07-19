

package com.apitable.shared.support.serializer;

import cn.hutool.core.util.StrUtil;
import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.config.properties.ConstProperties;
import com.apitable.shared.util.StringUtil;
import com.apitable.starter.oss.core.OssSignatureTemplate;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * <p>
 * When the avatar is empty, serialize and output the default avatar.
 * </p>
 *
 * @author Chambers
 */
public class ImageSerializer extends JsonSerializer<String> {

    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider serializers)
        throws IOException {
        if (StrUtil.isBlank(value)) {
            gen.writeString("");
            return;
        }
        if (value.startsWith("http")) {
            gen.writeString(value);
            return;
        }
        try {
            OssSignatureTemplate ossSignatureTemplate =
                SpringContextHolder.getBean(OssSignatureTemplate.class);
            String signatureUrl =
                ossSignatureTemplate.getSignatureUrl(this.getResourceUrlNOTrim(), value);
            gen.writeString(signatureUrl);
        } catch (Exception e) {
            gen.writeString(this.getResourceUrl() + value);
        }
    }

    private String getResourceUrl() {
        ConstProperties properties = SpringContextHolder.getBean(ConstProperties.class);
        return StringUtil.trimSlash(properties.getOssBucketByAsset().getResourceUrl());
    }

    private String getResourceUrlNOTrim() {
        ConstProperties properties = SpringContextHolder.getBean(ConstProperties.class);
        return properties.getOssBucketByAsset().getResourceUrl();
    }
}
