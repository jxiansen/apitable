

package com.apitable.shared.validator;

import cn.hutool.core.util.ObjectUtil;
import com.apitable.control.infrastructure.ExportLevelEnum;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Arrays;
import lombok.extern.slf4j.Slf4j;

/**
 * export level validator.
 */
@Slf4j
public class ExportLevelValidator implements ConstraintValidator<ExportLevelMatch, Integer> {

    @Override
    public boolean isValid(Integer exportLevel, ConstraintValidatorContext context) {
        if (ObjectUtil.isNull(exportLevel)) {
            return true;
        }

        return Arrays.stream(ExportLevelEnum.values())
            .anyMatch(value -> value.getValue().equals(exportLevel));
    }

}
