

package com.apitable.shared.validator;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.ElementType.TYPE;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * node match.
 */
@Documented
@Constraint(validatedBy = NodeValidator.class)
@Target({FIELD, TYPE, PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface NodeMatch {

    /**
     * validate error alert message.
     *
     * @return message
     */
    String message() default "node does not exist";

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
