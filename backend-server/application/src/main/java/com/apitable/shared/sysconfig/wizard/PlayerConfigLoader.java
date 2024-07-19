

package com.apitable.shared.sysconfig.wizard;

import com.apitable.shared.sysconfig.Converter;
import java.io.IOException;
import java.io.InputStream;

/**
 * <p>
 * System Config Manager.
 * </p>
 */
public class PlayerConfigLoader {

    public static PlayerConfig getConfig() {
        return Singleton.INSTANCE.getSingleton();
    }

    private enum Singleton {
        INSTANCE;

        private final PlayerConfig singleton;

        Singleton() {
            try {
                InputStream resourceAsStream =
                    PlayerConfigLoader.class.getResourceAsStream("/sysconfig/player_wizard.json");
                if (resourceAsStream == null) {
                    throw new IOException("System config file not found!");
                }
                singleton =
                    Converter.getObjectMapper().readValue(resourceAsStream, PlayerConfig.class);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load system configuration!", e);
            }
        }

        public PlayerConfig getSingleton() {
            return singleton;
        }
    }
}
