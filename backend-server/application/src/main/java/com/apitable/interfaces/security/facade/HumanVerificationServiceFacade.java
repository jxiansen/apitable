

package com.apitable.interfaces.security.facade;

import com.apitable.interfaces.security.model.NonRobotMetadata;

/**
 * human verification service facade.
 */
public interface HumanVerificationServiceFacade {

    /**
     * whether the human verification service is enabled.
     *
     * @return true if enabled, false otherwise.
     */
    boolean isEnabled();

    /**
     * verify the non-robot metadata.
     *
     * @param metadata the non-robot metadata.
     */
    void verifyNonRobot(NonRobotMetadata metadata);
}
