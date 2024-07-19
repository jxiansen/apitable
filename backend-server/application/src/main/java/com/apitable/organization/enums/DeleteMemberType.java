

package com.apitable.organization.enums;

import static com.apitable.organization.enums.OrganizationException.DELETE_ACTION_ERROR;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

/**
 * delete member type.
 */
@AllArgsConstructor
public enum DeleteMemberType implements IBaseEnum {

    /**
     * deleted from department.
     */
    FROM_TEAM(0, "deleted from department"),

    /**
     * deleted from organization.
     */
    FROM_SPACE(1, "deleted from organization");

    private final int value;

    private final String desc;

    private static final Map<Integer, DeleteMemberType> valueMap = new HashMap<>(16);

    static {
        for (DeleteMemberType type : DeleteMemberType.values()) {
            valueMap.put(type.value, type);
        }
    }


    /**
     * obtain enum by value.
     *
     * @param value value
     * @return enum
     */
    public static DeleteMemberType getByValue(int value) {
        DeleteMemberType result = valueMap.get(value);
        if (result == null) {
            throw new BusinessException(DELETE_ACTION_ERROR);
        }
        return result;
    }

    @Override
    public Integer getValue() {
        return value;
    }

    public String getDesc() {
        return desc;
    }
}
