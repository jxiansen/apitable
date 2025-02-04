

package com.apitable.shared.support.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 * BigDecimal formatter serializer.
 *
 * @author Shawn Deng
 */
public class OrderAmountSerializer extends JsonSerializer<BigDecimal> {

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen,
                          SerializerProvider serializerProvider) throws IOException {
        if (value != null) {
            gen.writeString(value.setScale(2, RoundingMode.HALF_EVEN) + "");
        } else {
            gen.writeNumber(0.00);
        }
    }
}
