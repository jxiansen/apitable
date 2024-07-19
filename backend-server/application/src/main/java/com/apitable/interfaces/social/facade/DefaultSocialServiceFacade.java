

package com.apitable.interfaces.social.facade;

import com.apitable.interfaces.social.event.SocialEvent;
import com.apitable.interfaces.social.model.SocialConnectInfo;
import com.apitable.interfaces.social.model.SocialUserBind;
import com.apitable.space.enums.SpaceUpdateOperate;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * default social service facade implements.
 */
public class DefaultSocialServiceFacade implements SocialServiceFacade {

    @Override
    public void createSocialUser(SocialUserBind socialUser) {

    }

    @Override
    public Long getUserIdByUnionId(String unionId) {
        return null;
    }

    @Override
    public String getSpaceIdByDomainName(String domainName) {
        return null;
    }

    @Override
    public String getDomainNameBySpaceId(String spaceId, boolean appendHttpsPrefix) {
        return null;
    }

    @Override
    public Map<String, String> getDomainNameMap(List<String> spaceIds) {
        return Collections.emptyMap();
    }

    @Override
    public void removeDomainBySpaceIds(List<String> spaceIds) {

    }

    @Override
    public SocialConnectInfo getConnectInfo(String spaceId) {
        return null;
    }

    @Override
    public boolean checkSocialBind(String spaceId) {
        return false;
    }

    @Override
    public void checkCanOperateSpaceUpdate(String spaceId, SpaceUpdateOperate spaceUpdateOperate) {

    }

    @Override
    public void checkWhetherSpaceCanChangeMainAdmin(String spaceId, Long opMemberId,
                                                    Long acceptMemberId,
                                                    List<SpaceUpdateOperate> spaceUpdateOperates) {

    }

    @Override
    public void deleteUser(Long userId) {

    }

    @Override
    public String getSuiteKeyByDingtalkSuiteId(String suiteId) {
        return null;
    }

    @Override
    public List<String> fuzzySearchIfSatisfyCondition(String spaceId, String word) {
        return null;
    }

    @Override
    public <T extends SocialEvent> void eventCall(T event) {

    }
}
