

package com.apitable.shared.validator;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * export levent match.
 *
 * @author tao
 */
@Documented
@Target({FIELD, METHOD, PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ExportLevelValidator.class)
public @interface ExportLevelMatch {

    /**
     * validate alert message.
     *
     * @return alert message
     */
    String message() default "【Security Settings】- The node export permission is illegally set";

    /**
     * default group.
     *
     * @return default group
     */
    Class<?>[] groups() default {};

    /**
     * no payload.
     *
     * @return no payload
     */
    Class<? extends Payload>[] payload() default {};

}
