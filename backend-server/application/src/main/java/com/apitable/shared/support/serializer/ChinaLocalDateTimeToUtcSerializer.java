

package com.apitable.shared.support.serializer;

import cn.hutool.core.date.DatePattern;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

/**
 * <p>
 * China date to UTC date formatter.
 * </p>
 *
 * @author Shawn Deng
 */
public class ChinaLocalDateTimeToUtcSerializer extends StdSerializer<LocalDateTime> {

    protected ChinaLocalDateTimeToUtcSerializer() {
        this(null);
    }

    protected ChinaLocalDateTimeToUtcSerializer(Class<LocalDateTime> t) {
        super(t);
    }

    @Override
    public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider provider)
        throws IOException {
        ZonedDateTime dateAndTime = ZonedDateTime.of(value, ZoneId.of("Asia/Shanghai"));
        ZonedDateTime utcDate = dateAndTime.withZoneSameInstant(ZoneOffset.UTC);
        gen.writeString(utcDate.format(DateTimeFormatter.ofPattern(DatePattern.UTC_MS_PATTERN)));
    }
}
