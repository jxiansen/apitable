

package com.apitable;

import com.apitable.shared.config.initializers.EnterpriseEnvironmentInitializers;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

/**
 * <p>
 * boot entry.
 * </p>
 *
 * @author Shawn Deng
 */
@SpringBootApplication
@ConfigurationPropertiesScan
public class Application {

    /**
     * main class.
     *
     * @param args run arguments
     */
    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(Application.class);
        application.addInitializers(new EnterpriseEnvironmentInitializers());
        application.run(args);
    }
}
