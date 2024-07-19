

package com.apitable.shared.config.properties;

import static com.apitable.shared.config.properties.SecurityProperties.PREFIX;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * <p>
 * security properties.
 * </p>
 *
 * @author Chambers
 */
@Data
@ConfigurationProperties(prefix = PREFIX)
public class SecurityProperties {

    public static final String PREFIX = "security";

    private Sms sms = new Sms();

    private Email email = new Email();

    /**
     * sms.
     */
    @Setter
    @Getter
    public static class Sms {

        /**
         * digit of numbers.
         */
        private int digit = 6;

        /**
         * Valid time of verification code，unit：minutes.
         */
        private int effectiveTime = 15;

        /**
         * Valid time for successful verification of verification code，unit：minutes.
         */
        private int successTime = 15;

        /**
         * Locking time exceeding the upper limit，unit：minutes.
         */
        private int lockTime = 20;

        /**
         * The maximum number of times to continuously obtain or verify the verification code error.
         */
        private int maxErrorNum = 5;

        /**
         * The maximum number of times a phone number can be sent in a day.
         */
        private int maxSendCount = 200;

        /**
         * The maximum number of times to send the same IP in one day.
         */
        private int maxIpSendCount = 100000;

        /**
         * The maximum number of times an application sends in a day.
         */
        private int maxDaySendCount = 10000000;
    }

    /**
     * email.
     */
    @Setter
    @Getter
    public static class Email {

        /**
         * Digits of verification code.
         */
        private int digit = 6;

        /**
         * Valid time of verification code，unit：minutes.
         */
        private int effectiveTime = 15;

        /**
         * Locking time exceeding the upper limit，unit：minutes.
         */
        private int lockTime = 20;

        /**
         * The maximum number of times to continuously obtain or verify the verification code error.
         */
        private int maxErrorNum = 5;

        /**
         * The maximum number of times a phone number can be sent in a day.
         */
        private int maxSendCount = 200;

        /**
         * The maximum number of times to send the same IP in one day.
         */
        private int maxIpSendCount = 100000;
    }
}
