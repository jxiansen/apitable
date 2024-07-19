

package com.apitable.base.service.impl;

import static com.apitable.user.enums.UserException.MOBILE_EMPTY;
import static com.apitable.user.enums.UserException.MOBILE_ERROR_FORMAT;
import static com.apitable.user.enums.UserException.PASSWORD_EMPTY;
import static com.apitable.user.enums.UserException.PASSWORD_ERROR_FORMAT;
import static com.apitable.user.enums.UserException.PASSWORD_ERROR_LENGTH;
import static com.apitable.user.enums.UserException.PASSWORD_ERROR_TYPE;

import cn.hutool.core.lang.Validator;
import com.apitable.base.service.ParamVerificationService;
import com.apitable.core.util.ExceptionUtil;
import org.springframework.stereotype.Service;

/**
 * Parameter validation service related interface implementation.
 */
@Service
public class ParamVerificationServiceImpl implements ParamVerificationService {

    @Override
    public void verifyPhone(String phone) {
        ExceptionUtil.isNotBlank(phone, MOBILE_EMPTY);
        ExceptionUtil.isTrue(Validator.isMobile(phone), MOBILE_ERROR_FORMAT);
    }

    @Override
    public void verifyPassword(String password) {
        ExceptionUtil.isNotBlank(password, PASSWORD_EMPTY);
        ExceptionUtil.isTrue(Validator.isBetween(password.length(), 8, 24), PASSWORD_ERROR_LENGTH);
        ExceptionUtil.isTrue(
            Validator.isMatchRegex("^[`~!@#$%^&*()-=+[{]}\\|;:'\",<.>/?\\w]+$", password),
            PASSWORD_ERROR_TYPE);
        ExceptionUtil.isTrue(
            Validator.isMatchRegex("^.*(?=.{8,24})(?=.*\\d)(?=.*[a-zA-Z]).*$", password),
            PASSWORD_ERROR_FORMAT);
    }
}
