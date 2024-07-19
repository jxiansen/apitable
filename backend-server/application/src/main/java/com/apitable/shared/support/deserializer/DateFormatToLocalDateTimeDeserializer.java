

package com.apitable.shared.support.deserializer;

import static cn.hutool.core.date.DatePattern.NORM_DATETIME_MINUTE_PATTERN;
import static cn.hutool.core.date.DatePattern.NORM_DATETIME_MS_PATTERN;
import static cn.hutool.core.date.DatePattern.NORM_DATETIME_PATTERN;
import static cn.hutool.core.date.DatePattern.NORM_DATE_PATTERN;

import cn.hutool.core.date.DateUtil;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonTokenId;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import java.io.IOException;
import java.time.LocalDateTime;

/**
 * <p>
 * String to LocalDateTime formatter.
 * </p>
 *
 * @author Chambers
 */
public class DateFormatToLocalDateTimeDeserializer extends JsonDeserializer<LocalDateTime> {

    @Override
    public LocalDateTime deserialize(JsonParser parser, DeserializationContext context)
        throws IOException {
        String value = parser.getText().trim();
        if (parser.hasTokenId(JsonTokenId.ID_STRING)) {
            int length = value.length();
            switch (length) {
                case 10:
                case 11:
                    return DateUtil.parseLocalDateTime(value, NORM_DATE_PATTERN);
                case 16:
                    return DateUtil.parseLocalDateTime(value, NORM_DATETIME_MINUTE_PATTERN);
                case 19:
                    return DateUtil.parseLocalDateTime(value, NORM_DATETIME_PATTERN);
                case 23:
                    return DateUtil.parseLocalDateTime(value, NORM_DATETIME_MS_PATTERN);
                default:
                    break;
            }
        }
        return null;
    }
}
