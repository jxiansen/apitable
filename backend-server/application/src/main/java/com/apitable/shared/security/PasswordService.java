

package com.apitable.shared.security;

/**
 * password service.
 */
public interface PasswordService {

    /**
     * matches.
     *
     * @param rawPassword     rawPassword
     * @param encodedPassword encodedPassword
     * @return boolean
     */
    boolean matches(CharSequence rawPassword, String encodedPassword);

    /**
     * encode.
     *
     * @param rawPassword rawPassword
     * @return String
     */
    String encode(CharSequence rawPassword);
}
