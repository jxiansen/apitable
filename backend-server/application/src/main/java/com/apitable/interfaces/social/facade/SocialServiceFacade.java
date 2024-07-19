

package com.apitable.interfaces.social.facade;

import com.apitable.interfaces.social.event.SocialEvent;
import com.apitable.interfaces.social.model.SocialConnectInfo;
import com.apitable.interfaces.social.model.SocialUserBind;
import com.apitable.space.enums.SpaceUpdateOperate;
import java.util.List;
import java.util.Map;

/**
 * social service facade interface.
 */
public interface SocialServiceFacade {

    void createSocialUser(SocialUserBind socialUser);

    Long getUserIdByUnionId(String unionId);

    String getSpaceIdByDomainName(String domainName);

    String getDomainNameBySpaceId(String spaceId, boolean appendHttpsPrefix);

    Map<String, String> getDomainNameMap(List<String> spaceIds);

    void removeDomainBySpaceIds(List<String> spaceIds);

    SocialConnectInfo getConnectInfo(String spaceId);

    boolean checkSocialBind(String spaceId);

    void checkCanOperateSpaceUpdate(String spaceId, SpaceUpdateOperate spaceUpdateOperate);

    void checkWhetherSpaceCanChangeMainAdmin(String spaceId, Long opMemberId, Long acceptMemberId,
                                             List<SpaceUpdateOperate> spaceUpdateOperates);

    void deleteUser(Long userId);

    String getSuiteKeyByDingtalkSuiteId(String suiteId);

    List<String> fuzzySearchIfSatisfyCondition(String spaceId, String word);

    <T extends SocialEvent> void eventCall(T event);
}
