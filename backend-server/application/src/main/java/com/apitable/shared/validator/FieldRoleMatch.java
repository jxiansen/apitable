

package com.apitable.shared.validator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * field role validation annotation.
 *
 * @author Shawn Deng
 */
@Documented
@Constraint(validatedBy = FieldRoleValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface FieldRoleMatch {

    /**
     * validate error alert message.
     *
     * @return alert message
     */
    String message() default "role no exist";

    /**
     * default empty.
     *
     * @return empty
     */
    Class<?>[] groups() default {};

    /**
     * default empty.
     *
     * @return empty
     */
    Class<? extends Payload>[] payload() default {};
}
