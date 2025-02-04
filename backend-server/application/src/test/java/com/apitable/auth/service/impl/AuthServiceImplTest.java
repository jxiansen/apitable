

package com.apitable.auth.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatNoException;
import static org.mockito.BDDMockito.given;

import cn.hutool.core.util.IdUtil;
import com.apitable.AbstractIntegrationTest;
import com.apitable.auth.enums.LoginType;
import com.apitable.auth.ro.LoginRo;
import com.apitable.base.enums.EmailCodeType;
import com.apitable.base.enums.SmsCodeType;
import com.apitable.core.exception.BusinessException;
import com.apitable.shared.captcha.CodeValidateScope;
import com.apitable.shared.captcha.ValidateTarget;
import com.apitable.shared.context.SessionContext;
import com.apitable.user.entity.UserEntity;
import com.apitable.user.vo.UserInfoVo;
import java.util.concurrent.atomic.AtomicReference;
import org.junit.jupiter.api.Test;

public class AuthServiceImplTest extends AbstractIntegrationTest {

    private static final String SOLID_CODE = "123456";

    @Test
    public void testLoginUsingPasswordWithMobilePhoneNotExist() {
        // The mobile phone number does not exist, try to log in, do not automatically register
        LoginRo loginRo = new LoginRo();
        loginRo.setAreaCode("+86");
        loginRo.setUsername("13633333333");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatCode(() -> iAuthService.loginUsingPassword(loginRo)).isInstanceOf(
            BusinessException.class);
    }

    @Test
    public void testLoginUsingPasswordWithMobilePhoneWithoutPassword() {
        // The phone number but the password is wrong, try to log in, not automatically registered
        LoginRo loginRo = new LoginRo();
        loginRo.setAreaCode("+86");
        loginRo.setUsername("13633333333");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatCode(() -> iAuthService.loginUsingPassword(loginRo)).isInstanceOf(
            BusinessException.class);
    }

    @Test
    public void testLoginUsingPasswordWithMobilePhoneInputPasswordCorrect() {
        // The phone number and password are correct and try to log in
        UserEntity user = new UserEntity();
        user.setUuid(IdUtil.fastSimpleUUID());
        user.setCode("+86");
        user.setMobilePhone("13631619061");
        user.setPassword(passwordEncoder.encode("qwer1234"));
        iUserService.save(user);

        LoginRo loginRo = new LoginRo();
        loginRo.setAreaCode("+86");
        loginRo.setUsername("13631619061");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatNoException().isThrownBy(() -> iAuthService.loginUsingPassword(loginRo));
    }

    @Test
    public void testLoginUsingPasswordWithEmailNotExist() {
        // The mobile phone number does not exist, try to log in, do not automatically register
        LoginRo loginRo = new LoginRo();
        loginRo.setUsername("test_user@apitable.com");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatCode(() -> iAuthService.loginUsingPassword(loginRo)).isInstanceOf(
            BusinessException.class);
    }

    @Test
    public void testLoginUsingPasswordWithEmailWithoutPassword() {
        // Phone number but wrong password try to log in, no automatic registration
        LoginRo loginRo = new LoginRo();
        loginRo.setUsername("test_user@apitable.com");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatCode(() -> iAuthService.loginUsingPassword(loginRo)).isInstanceOf(
            BusinessException.class);
    }

    @Test
    public void testLoginUsingPasswordWithEmailInputPasswordCorrect() {
        // The phone number and password are correct and try to log in
        UserEntity user = new UserEntity();
        user.setUuid(IdUtil.fastSimpleUUID());
        user.setEmail("test_user@apitable.com");
        user.setPassword(passwordEncoder.encode("qwer1234"));
        iUserService.save(user);

        LoginRo loginRo = new LoginRo();
        loginRo.setUsername("test_user@apitable.com");
        loginRo.setType(LoginType.PASSWORD);
        loginRo.setCredential("qwer1234");
        assertThatNoException().isThrownBy(() -> iAuthService.loginUsingPassword(loginRo));
    }

    @Test
    public void testLoginUsingSmsCodeWithMobilePhoneNotExistAutoRegister() {
        String areaCode = "+86";
        String mobile = "13633333333";
        // Prepare verification code
        String validCode = sendLoginSmsCode(areaCode, mobile);

        LoginRo loginRo = new LoginRo();
        loginRo.setAreaCode(areaCode);
        loginRo.setUsername(mobile);
        loginRo.setType(LoginType.SMS_CODE);
        loginRo.setCredential(validCode);

        AtomicReference<Long> userId = new AtomicReference<>();

        assertThatNoException().isThrownBy(
            () -> userId.set(iAuthService.loginUsingSmsCode(loginRo).getUserId()));

        checkUserHasSpace(userId.get());
    }

    @Test
    public void testLoginUsingSmsCodeWithMobilePhoneExistAutoLogin() {
        // prepare users
        UserEntity user = new UserEntity();
        user.setUuid(IdUtil.fastSimpleUUID());
        user.setCode("+86");
        user.setMobilePhone("13633333333");
        iUserService.save(user);

        String areaCode = "+86";
        String mobile = "13633333333";
        // Prepare verification code
        String validCode = sendLoginSmsCode(areaCode, mobile);

        LoginRo loginRo = new LoginRo();
        loginRo.setAreaCode(areaCode);
        loginRo.setUsername(mobile);
        loginRo.setType(LoginType.SMS_CODE);
        loginRo.setCredential(validCode);

        assertThatNoException().isThrownBy(() -> iAuthService.loginUsingSmsCode(loginRo));
    }

    @Test
    public void testLoginUsingEmailCodeWithEmailNotExistAutoRegister() {
        String email = "develop@apitable.com";
        // Prepare verification code
        String validCode = sendLoginEmailCode(email);

        LoginRo loginRo = new LoginRo();
        loginRo.setUsername(email);
        loginRo.setType(LoginType.EMAIL_CODE);
        loginRo.setCredential(validCode);

        AtomicReference<Long> userId = new AtomicReference<>();

        assertThatNoException().isThrownBy(
            () -> userId.set(iAuthService.loginUsingEmailCode(loginRo).getUserId()));

        checkUserHasSpace(userId.get());
    }

    @Test
    public void testLoginUsingEmailCodeWithEmailExistAutoLogin() {
        String email = "develop@apitable.com";
        UserEntity user = new UserEntity();
        user.setUuid(IdUtil.fastSimpleUUID());
        user.setEmail(email);
        iUserService.save(user);

        String validCode = sendLoginEmailCode(email);

        LoginRo loginRo = new LoginRo();
        loginRo.setUsername(email);
        loginRo.setType(LoginType.EMAIL_CODE);
        loginRo.setCredential(validCode);

        assertThatNoException().isThrownBy(() -> iAuthService.loginUsingEmailCode(loginRo));
    }

    private String sendLoginSmsCode(String areaCode, String mobile) {
        CodeValidateScope scope = CodeValidateScope.fromName(SmsCodeType.fromName(2).name());
        ValidateTarget target = ValidateTarget.create(mobile, areaCode);
        given(smsValidateCodeProcessor.createAndSend(target, scope, false)).willReturn(SOLID_CODE);
        return smsValidateCodeProcessor.createAndSend(target, scope, false);
    }

    public String sendLoginEmailCode(String email) {
        CodeValidateScope scope = CodeValidateScope.fromName(EmailCodeType.fromName(2).name());
        ValidateTarget target = ValidateTarget.create(email);
        given(emailValidateCodeProcessor.createAndSend(target, scope, false)).willReturn(
            SOLID_CODE);
        return emailValidateCodeProcessor.createAndSend(target, scope, false);
    }

    private void checkUserHasSpace(Long userId) {
        int count = iMemberService.getSpaceCountByUserId(userId);
        assertThat(count).isNotEqualTo(0).isGreaterThan(0);
        SessionContext.setUserId(userId);
        checkNewUseInfo(userId);
    }

    private void checkNewUseInfo(Long userId) {
        UserInfoVo userInfoVo = iUserService.getCurrentUserInfo(userId, null, false);
        assertThat(userInfoVo).isNotNull();
        assertThat(userInfoVo.getUserId()).isNotNull();
        assertThat(userInfoVo.getUuid()).isNotNull();
        assertThat(userInfoVo.getNickName()).isNotBlank();
        assertThat(userInfoVo.getSpaceId()).isNotBlank();
        assertThat(userInfoVo.getMemberId()).isNotNull();
        assertThat(userInfoVo.getMemberName()).isNotBlank();
        assertThat(userInfoVo.getUnitId()).isNotNull();
        assertThat(userInfoVo.getIsNewComer()).isNotNull().isTrue();
        assertThat(userInfoVo.getIsNickNameModified()).isNotNull().isTrue();
        assertThat(userInfoVo.getIsMemberNameModified()).isNotNull().isTrue();
        assertThat(userInfoVo.getUsedInviteReward()).isNotNull().isFalse();
    }
}
