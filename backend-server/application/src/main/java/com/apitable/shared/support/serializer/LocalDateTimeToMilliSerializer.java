

package com.apitable.shared.support.serializer;

import static java.time.ZoneId.getAvailableZoneIds;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.cache.bean.LoginUserDto;
import com.apitable.shared.config.properties.SystemProperties;
import com.apitable.shared.context.LoginContext;
import com.apitable.shared.context.SessionContext;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Set;

/**
 * LocalDateTime to timestamp（mills）.
 *
 * @author Shawn Deng
 */
public class LocalDateTimeToMilliSerializer extends JsonSerializer<LocalDateTime> {

    @Override
    public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider provider)
        throws IOException {
        SystemProperties systemProperties = SpringContextHolder.getBean(SystemProperties.class);
        // Get user timeZone
        Long userId = SessionContext.getUserIdWithoutException();
        String userTimeZone;
        if (userId != null) {
            LoginUserDto loginUserDto = LoginContext.me().getLoginUser();
            userTimeZone = loginUserDto != null && loginUserDto.getTimeZone() != null
                ? loginUserDto.getTimeZone() : systemProperties.getTimeZoneId().toString();
        } else {
            userTimeZone = systemProperties.getTimeZoneId().toString();
        }
        // get Available ZoneIds
        Set<String> zoneIds = getAvailableZoneIds();
        userTimeZone = zoneIds.contains(userTimeZone) ? userTimeZone :
            systemProperties.getTimeZone().toString();
        // server config timeZone time
        ZonedDateTime originalZonedDateTime =
            ZonedDateTime.of(value, systemProperties.getTimeZoneId());
        // target timeZone time
        ZonedDateTime targetZonedDateTime =
            originalZonedDateTime.withZoneSameInstant(ZoneId.of(userTimeZone));
        gen.writeNumber(targetZonedDateTime.toInstant().toEpochMilli());
    }
}
