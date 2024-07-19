

package com.apitable.interfaces.social.model;

import com.apitable.space.enums.SpaceResourceGroupCode;
import java.util.List;

/**
 * social connect info.
 */
public interface SocialConnectInfo {

    String getSpaceId();

    Integer getPlatform();

    Integer getAppType();

    String getAppId();

    String getTenantId();

    Integer getAuthMode();

    boolean isEnabled();

    boolean contactSyncing();

    String getRemindObserver();

    List<SpaceResourceGroupCode> getDisableResourceGroupCodes();
}
