

package com.apitable.starter.sms.core;

/**
 * <p>
 * SMS transmitter factory.
 * </p>
 *
 * @author Chambers
 */
public interface SmsSenderFactory {

    /**
     * Create SMS sender.
     *
     * @return SmsSender
     */
    SmsSender createSender();
}
