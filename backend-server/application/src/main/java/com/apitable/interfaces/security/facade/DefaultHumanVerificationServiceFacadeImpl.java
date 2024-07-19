

package com.apitable.interfaces.security.facade;

import com.apitable.interfaces.security.model.NonRobotMetadata;

/**
 * default human verification service facade implementation.
 */
public class DefaultHumanVerificationServiceFacadeImpl implements HumanVerificationServiceFacade {

    @Override
    public boolean isEnabled() {
        return false;
    }

    @Override
    public void verifyNonRobot(NonRobotMetadata metadata) {

    }
}
