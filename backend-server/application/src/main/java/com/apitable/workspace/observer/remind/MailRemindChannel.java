

package com.apitable.workspace.observer.remind;

/**
 * mail remind channel.
 */
public enum MailRemindChannel implements RemindChannel {

    MAIL(0);

    private final int code;

    MailRemindChannel(int code) {
        this.code = code;
    }

    @Override
    public Integer getCode() {
        return code;
    }
}
