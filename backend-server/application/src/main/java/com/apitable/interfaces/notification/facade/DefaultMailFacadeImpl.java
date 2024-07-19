

package com.apitable.interfaces.notification.facade;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.springframework.core.io.ClassPathResource;

/**
 * Default Mail Facade Implement Class.
 *
 * @author Chambers
 */
public class DefaultMailFacadeImpl extends AbstractMailFacade {

    /**
     * * Get Cloud Mail Template Id.
     *
     * @param lang    language
     * @param subject mail subject
     * @return template id about cloud mail
     */
    @Override
    public Long getCloudMailTemplateId(final String lang, final String subject) {
        return DefaultMailTemplateLoader.getTemplateId(subject);
    }

    /**
     * * Get Subject Properties.
     *
     * @param locale locale
     * @return Properties
     * @throws IOException io exception
     */
    @Override
    public Properties getSubjectProperties(final String locale)
        throws IOException {
        final Properties properties = new Properties();
        ClassPathResource defaultResource =
            new ClassPathResource("templates/notification/subject.properties");
        try (InputStream in = defaultResource.getInputStream()) {
            properties.load(in);
        }
        return properties;
    }

}
