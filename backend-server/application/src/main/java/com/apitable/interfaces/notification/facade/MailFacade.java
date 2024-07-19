

package com.apitable.interfaces.notification.facade;

import java.io.IOException;
import java.util.Properties;

/**
 * MailFacade.
 *
 * @author Chambers
 */
public interface MailFacade {

    /**
     * * Get Cloud Mail Template Id.
     *
     * @param lang    language
     * @param subject mail subject
     * @return template id about cloud mail
     */
    Long getCloudMailTemplateId(String lang, String subject);

    /**
     * * Get Subject Properties.
     *
     * @param locale locale
     * @return Properties
     */
    Properties getSubjectProperties(String locale) throws IOException;

    /**
     * * Load Template Resource Path.
     *
     * @param locale       locale
     * @param templateName templateName
     * @return Path
     */
    String loadTemplateResourcePath(String locale, String templateName);
}
