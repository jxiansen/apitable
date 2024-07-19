

package com.apitable.shared.clock.spring;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.clock.Clock;
import com.apitable.shared.clock.DefaultClock;
import com.apitable.shared.clock.MockClock;
import com.apitable.shared.config.properties.SystemProperties;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

/**
 * clock manager.
 */
@Component
public class ClockManager implements InitializingBean {

    private Clock clock;

    private final SystemProperties systemProperties;

    public ClockManager(SystemProperties systemProperties) {
        this.systemProperties = systemProperties;
    }

    public static ClockManager me() {
        return SpringContextHolder.getBean(ClockManager.class);
    }

    /**
     * get mock clock.
     *
     * @return MockClock
     */
    public MockClock getMockClock() {
        if (!systemProperties.isTestEnabled()) {
            throw new UnsupportedOperationException(
                "System has not been configured to update the time");
        }
        return (MockClock) clock;
    }

    /**
     * get utc now.
     *
     * @return OffsetDateTime
     */
    public OffsetDateTime getUtcNow() {
        if ((clock instanceof MockClock)) {
            MockClock mockClock = (MockClock) clock;
            return mockClock.getUTCNow();
        }
        DefaultClock defaultClock = (DefaultClock) clock;
        return defaultClock.getUTCNow();
    }

    /**
     * get LocalDate of now.
     *
     * @return LocalDate
     */
    public LocalDate getLocalDateNow() {
        OffsetDateTime utcNow = getUtcNow();
        return utcNow.withOffsetSameInstant(systemProperties.getTimeZone()).toLocalDate();
    }

    /**
     * get LocalDateTime of now.
     *
     * @return LocalDateTime
     */
    public LocalDateTime getLocalDateTimeNow() {
        OffsetDateTime utcNow = getUtcNow();
        return utcNow.withOffsetSameInstant(systemProperties.getTimeZone()).toLocalDateTime();
    }

    /**
     * get server timezone.
     *
     * @return ZoneId
     */
    public ZoneId getDefaultTimeZone() {
        return this.systemProperties.getTimeZoneId();
    }

    public LocalDateTime convertMillis(long unixTimestamp) {
        Instant instant = Instant.ofEpochMilli(unixTimestamp);
        return LocalDateTime.ofInstant(instant, getDefaultTimeZone());
    }

    public long convertUnixTimeToMillis(LocalDateTime dateTime) {
        return dateTime.atZone(getDefaultTimeZone()).toInstant().toEpochMilli();
    }

    @Override
    public void afterPropertiesSet() {
        if (systemProperties.isTestEnabled()) {
            clock = new MockClock();
        } else {
            clock = new DefaultClock();
        }
    }
}
