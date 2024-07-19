

package com.apitable.interfaces.user.facade;

import com.apitable.interfaces.auth.model.UserAuth;
import com.apitable.interfaces.user.model.InvitationCode;
import com.apitable.interfaces.user.model.RewardedUser;

/**
 * Abstract user service facade.
 */
public abstract class AbstractUserServiceFacadeImpl implements UserServiceFacade {

    @Override
    public void onUserChangeEmailAction(Long userId, String email, String oldEmail) {

    }

    @Override
    public void onUserChangeAvatarAction(Long userId, String avatarUrl) {

    }

    @Override
    public void onUserChangeNicknameAction(Long userId, String nickname, Boolean init) {

    }

    @Override
    public void onUserCloseAccount(Long userId) {

    }

    @Override
    public InvitationCode getUserInvitationCode(Long userId) {
        return new InvitationCode();
    }

    @Override
    public boolean getInvitationReward(Long userId) {
        return false;
    }

    @Override
    public void createInvitationCode(Long userId) {
    }

    @Override
    public void rewardUserInfoUpdateAction(RewardedUser rewardedUser) {

    }

    @Override
    public boolean resetPassword(UserAuth userAuth) {
        return false;
    }

    @Override
    public boolean verifyEmail(String email) {
        return false;
    }

}
