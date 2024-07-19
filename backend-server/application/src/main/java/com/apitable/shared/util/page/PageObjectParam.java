

package com.apitable.shared.util.page;

import static com.apitable.shared.constants.PageConstants.PAGE_PARAM;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * <p>
 * String transform Object.
 * </p>
 *
 * @author Shawn Deng
 */
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface PageObjectParam {

    /**
     * param name.
     *
     * @return param name
     */
    String name() default PAGE_PARAM;

    /**
     * whether required.
     *
     * @return true if required
     */
    boolean required() default true;
}
