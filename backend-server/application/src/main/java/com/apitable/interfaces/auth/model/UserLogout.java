

package com.apitable.interfaces.auth.model;

/**
 * user logout object.
 */
public class UserLogout {

    private boolean redirect;

    private String redirectUri;

    public UserLogout() {

    }

    public UserLogout(String redirectUri) {
        this(true, redirectUri);
    }

    public UserLogout(boolean redirect, String redirectUri) {
        this.redirect = redirect;
        this.redirectUri = redirectUri;
    }

    public boolean isRedirect() {
        return redirect;
    }

    public String getRedirectUri() {
        return redirectUri;
    }
}
