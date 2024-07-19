

package com.apitable.shared.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;

/**
 * <p>
 * Date util.
 * </p>
 *
 * @author Chambers
 */
public class DateHelper {

    /**
     * simple date formatter: yyyy-MM-dd.
     */
    public static final DateTimeFormatter SIMPLE_DATE = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    /**
     * simple date formatter: yyyy-MM.
     */
    public static final DateTimeFormatter SIMPLE_MONTH = DateTimeFormatter.ofPattern("yyyy-MM");

    /**
     * get the time remaining for today(unit：second).
     */
    public static long todayTimeLeft() {
        LocalDateTime midnight =
            LocalDateTime.now().plusDays(1).withHour(0).withMinute(0).withSecond(0).withNano(0);
        return ChronoUnit.SECONDS.between(LocalDateTime.now(), midnight);
    }

    /**
     * Safely sets the specified day of the month for the given LocalDate object.
     * It checks the last day of the month for the given date and sets the day of the month
     * based on the maximum valid day of the month.
     *
     * @param current       The current LocalDate object to set the day of the month.
     * @param dayOfMonth    The desired day of the month to set.
     * @return              A new LocalDate object with the safely set day of the month.
     */
    public static LocalDate safeSetDayOfMonth(LocalDate current, int dayOfMonth) {
        LocalDate lastDayOfMonth = current.with(TemporalAdjusters.lastDayOfMonth());
        return current.withDayOfMonth(Math.min(dayOfMonth, lastDayOfMonth.getDayOfMonth()));
    }

    /**
     * format the time according to the incoming format.
     *
     * @param date   date
     * @param format formatter
     * @return formatted string
     */
    public static String formatFullTime(LocalDate date, String format) {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(format);
        return date.format(dateTimeFormatter);
    }
}
