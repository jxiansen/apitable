

package com.apitable.shared.support.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * <p>
 * Null Object serialization.
 * </p>
 *
 * @author Chambers
 */
public class NullObjectSerializer extends JsonSerializer<Object> {

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializerProvider serializers)
        throws IOException {
        gen.writeStartObject();
        gen.writeEndObject();
    }
}
