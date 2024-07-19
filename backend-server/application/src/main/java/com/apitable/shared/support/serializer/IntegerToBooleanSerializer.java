

package com.apitable.shared.support.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * Integer to boolean.
 */
public class IntegerToBooleanSerializer extends JsonSerializer<Integer> {

    @Override
    public void serialize(Integer value, JsonGenerator gen, SerializerProvider provider)
        throws IOException {
        gen.writeBoolean(null != value && value.equals(1));
    }
}
