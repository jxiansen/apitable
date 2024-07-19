

package com.apitable.shared.captcha;

import com.apitable.core.util.SpringContextHolder;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * <p>
 * captcha processing manager.
 * </p>
 *
 * @author Shawn Deng
 */
@Component
public class ValidateCodeProcessorManage {

    private final Map<String, ValidateCodeProcessor> validateCodeProcessors;

    @Autowired
    public ValidateCodeProcessorManage(Map<String, ValidateCodeProcessor> validateCodeProcessors) {
        this.validateCodeProcessors = validateCodeProcessors;
    }

    public static ValidateCodeProcessorManage me() {
        return SpringContextHolder.getBean(ValidateCodeProcessorManage.class);
    }

    public ValidateCodeProcessor findValidateCodeProcessor(ValidateCodeType type) {
        return findValidateCodeProcessor(type.toString().toLowerCase());
    }

    /**
     * find captcha processor by type.
     *
     * @param type captcha type
     * @return captcha processor
     */
    public ValidateCodeProcessor findValidateCodeProcessor(String type) {
        String name = type.toLowerCase() + ValidateCodeProcessor.class.getSimpleName();
        ValidateCodeProcessor processor = validateCodeProcessors.get(name);
        if (processor == null) {
            throw new RuntimeException("captcha processor " + name + " is not exist");
        }
        return processor;
    }
}
