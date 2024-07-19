

package com.apitable.base.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;


/**
 * <p>
 * database exception.
 * status code range（210-219）
 * </p>
 *
 * @author Shawn Deng
 */
@Getter
@AllArgsConstructor
public enum DatabaseException implements BaseException {

    QUERY_EMPTY_BY_ID(210, "data does not exist"),

    INSERT_ERROR(211, "failed to add data"),

    EDIT_ERROR(212, "failed to modify data"),

    DELETE_ERROR(213, "failed to delete data");

    private final Integer code;

    private final String message;
}
