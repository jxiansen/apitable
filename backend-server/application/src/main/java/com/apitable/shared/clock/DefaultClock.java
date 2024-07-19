

package com.apitable.shared.clock;

import static java.time.temporal.ChronoUnit.MILLIS;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

/**
 * Default clock implements.
 *
 * @author Shawn Deng
 */
public class DefaultClock implements Clock {
    @Override
    public OffsetDateTime getNow(final ZoneOffset tz) {
        final OffsetDateTime result = OffsetDateTime.now(tz);
        return truncateMs(result);
    }

    @Override
    public OffsetDateTime getUTCNow() {
        return getNow(ZoneOffset.UTC);
    }

    @Override
    public LocalDate getUTCToday() {
        return getToday(ZoneOffset.UTC);
    }

    @Override
    public LocalDate getToday(final ZoneOffset timeZone) {
        return getUTCNow().withOffsetSameInstant(timeZone).toLocalDate();
    }

    /**
     * Convert a UTC date time to a local date time.
     *
     * @param input offset date time
     * @return offset date time
     */
    public static OffsetDateTime toUtcDateTime(final OffsetDateTime input) {
        if (input == null) {
            return null;
        }
        final OffsetDateTime result = input.with(ZoneOffset.UTC);
        return truncateMs(result);
    }

    /**
     * Convert a local date time to a UTC date time.
     *
     * @param input offset date time
     * @return offset date time
     */
    public static OffsetDateTime truncateMs(final OffsetDateTime input) {
        return input.truncatedTo(MILLIS);
    }
}
