

package com.apitable.control.infrastructure;

import com.apitable.control.infrastructure.role.ControlRole;
import java.util.LinkedHashMap;

/**
 * Control role Dict.
 *
 * @author Shawn Deng
 */
public class ControlRoleDict extends LinkedHashMap<String, ControlRole> {

    private static final long serialVersionUID = -7810769751186072489L;

    static final float DEFAULT_LOAD_FACTOR = 0.75f;

    static final int DEFAULT_CAPACITY = 1 << 4;

    public static ControlRoleDict create() {
        return new ControlRoleDict();
    }

    public ControlRoleDict() {
        this(DEFAULT_CAPACITY);
    }

    public ControlRoleDict(int initialCapacity) {
        this(initialCapacity, DEFAULT_LOAD_FACTOR);
    }

    public ControlRoleDict(int initialCapacity, float loadFactor) {
        super(initialCapacity, loadFactor);
    }

    @Override
    public ControlRoleDict clone() {
        return (ControlRoleDict) super.clone();
    }
}
