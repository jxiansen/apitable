

package com.apitable.shared.support.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * <p>
 * wechat-mp
 * QR code image prefix serialization processing.
 * </p>
 *
 * @author Chambers
 */
public class QrcodePreSerializer extends JsonSerializer<String> {

    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider serializers)
        throws IOException {
        String pre = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=";
        gen.writeString(pre + value);
    }
}
