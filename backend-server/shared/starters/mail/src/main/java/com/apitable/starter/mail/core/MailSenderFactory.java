

package com.apitable.starter.mail.core;

/**
 * Mail sender factory.
 *
 * @author Chambers
 */
public interface MailSenderFactory {

    /**
     * Create sender.
     *
     * @return CloudMailSender
     */
    CloudMailSender createSender();
}
