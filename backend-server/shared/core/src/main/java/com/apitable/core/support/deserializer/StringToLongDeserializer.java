

package com.apitable.core.support.deserializer;

import cn.hutool.core.util.NumberUtil;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonTokenId;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import java.io.IOException;
import java.util.OptionalLong;

/**
 * <p>
 * String to Long deserializer.
 * </p>
 */
public class StringToLongDeserializer extends JsonDeserializer<Long> {

    @Override
    public Long deserialize(JsonParser parser, DeserializationContext context) throws IOException {
        if (parser.hasTokenId(JsonTokenId.ID_STRING)) {
            String value = parser.getText().trim();
            if (NumberUtil.isLong(value)) {
                OptionalLong optionalLong = OptionalLong.of(NumberUtil.parseLong(value));
                return optionalLong.getAsLong();
            }
        }

        return null;
    }
}
