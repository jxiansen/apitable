

package com.apitable.shared.sysconfig.notification;

import com.apitable.shared.sysconfig.Converter;
import java.io.IOException;
import java.io.InputStream;

/**
 * <p>
 * System Config Manager.
 * </p>
 */
public class NotificationConfigLoader {

    public static NotificationConfig getConfig() {
        return Singleton.INSTANCE.getSingleton();
    }

    private enum Singleton {
        INSTANCE;

        private final NotificationConfig singleton;

        Singleton() {
            try {
                InputStream resourceAsStream = NotificationConfigLoader.class.getResourceAsStream(
                    "/sysconfig/notification.json");
                if (resourceAsStream == null) {
                    throw new IOException("System config file not found!");
                }
                singleton = Converter.getObjectMapper()
                    .readValue(resourceAsStream, NotificationConfig.class);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load system configuration!", e);
            }
        }

        public NotificationConfig getSingleton() {
            return singleton;
        }
    }
}
