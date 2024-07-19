

package com.apitable.shared.captcha;

import static com.apitable.user.enums.UserException.MOBILE_ERROR_FORMAT;

import cn.hutool.core.lang.Validator;
import com.apitable.core.util.ExceptionUtil;
import com.apitable.shared.util.StringUtil;
import lombok.Data;

/**
 * <p>
 * validate the target object.
 * </p>
 *
 * @author Chambers
 */
@Data
public class ValidateTarget {

    private String target;

    private String areaCode;

    private static String mainlandAreaCode = "+86";

    private String lang;

    public ValidateTarget() {
    }

    public ValidateTarget(String target) {
        this.target = target;
    }

    public ValidateTarget(String target, String areaCode) {
        this.target = target;
        this.areaCode = areaCode;
    }

    public static ValidateTarget create(String target) {
        return new ValidateTarget(target);
    }

    /**
     * create a ValidateTarget object.
     *
     * @param target   target
     * @param areaCode areaCode
     * @return ValidateTarget
     */
    public static ValidateTarget create(String target, String areaCode) {
        ExceptionUtil.isTrue(StringUtil.isPureNumber(target), MOBILE_ERROR_FORMAT);
        ExceptionUtil.isTrue(!mainlandAreaCode.equals(areaCode)
            || (target.length() == 11 && Validator.isMobile(target)), MOBILE_ERROR_FORMAT);
        return new ValidateTarget(target, areaCode);
    }

    /**
     * get the real target.
     *
     * @return real target
     */
    public String getRealTarget() {
        if (areaCode == null) {
            return target;
        } else {
            return areaCode + target;
        }
    }

    /**
     * get the intact target.
     *
     * @return intact target
     */
    public String getIntactTarget() {
        if (Validator.isMobile(target)) {
            return mainlandAreaCode + target;
        }
        return target;
    }
}
