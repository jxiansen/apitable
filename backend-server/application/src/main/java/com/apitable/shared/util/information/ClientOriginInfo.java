

package com.apitable.shared.util.information;

import jakarta.servlet.http.Cookie;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Client Origin Info Object.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientOriginInfo {

    private String ip;

    private String userAgent;

    private Cookie[] cookies;
}
