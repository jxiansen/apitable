

package com.apitable.auth.vo;

import lombok.Data;

/**
 * logout vo.
 *
 * @author Shawn Deng
 */
@Data
public class LogoutVO {

    private boolean needRedirect;

    private String redirectUri;
}
