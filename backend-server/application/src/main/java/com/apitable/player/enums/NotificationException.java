

package com.apitable.player.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * notification exception.
 * status code range（1201-1299）
 * </p>
 *
 * @author zoe zheng
 */
@Getter
@AllArgsConstructor
public enum NotificationException implements BaseException {

    USER_EMPTY_ERROR(1201, "user does not exist"),

    MEMBER_EMPTY_ERROR(1202, "member does not exist"),

    TMPL_TO_TAG_ERROR(1203, "template sending tag error"),

    MEMBER_MENTIONED_ERROR(1204, "member mention error");

    private final Integer code;

    private final String message;
}
