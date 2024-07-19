

package com.apitable.shared.support.serializer;

import cn.hutool.json.JSONUtil;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * String to json.
 */
public class StringToJsonObjectSerializer extends JsonSerializer<String> {

    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider provider)
        throws IOException {
        gen.writeObject(JSONUtil.parse(value));
    }
}
