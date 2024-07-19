

package com.apitable.shared.captcha.email;

import cn.hutool.core.util.RandomUtil;
import com.apitable.shared.captcha.ValidateCode;
import com.apitable.shared.captcha.ValidateCodeGenerator;
import org.springframework.stereotype.Component;

/**
 * <p>
 * email verification code generator.
 * </p>
 *
 * @author Shawn Deng
 */
@Component
public class EmailValidateCodeGenerator implements ValidateCodeGenerator {

    @Override
    public ValidateCode generate() {
        String randomCode = RandomUtil.randomString(8);
        return new ValidateCode(randomCode, 900);
    }
}
