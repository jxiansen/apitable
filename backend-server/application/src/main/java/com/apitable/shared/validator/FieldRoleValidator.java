

package com.apitable.shared.validator;

import com.apitable.control.infrastructure.role.RoleConstants.Field;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;

/**
 * field role validator.
 */
@Slf4j
public class FieldRoleValidator implements ConstraintValidator<FieldRoleMatch, String> {

    private static final List<String> ROLES = Arrays.asList(Field.EDITOR, Field.READER);

    @Override
    public boolean isValid(String roleCode, ConstraintValidatorContext context) {
        return ROLES.contains(roleCode);
    }
}
