

package com.apitable.shared.holder;

import com.apitable.shared.component.notification.NotificationRenderField;

/**
 * <p>
 * Notify temporary field.
 * </p>
 *
 * @author zoe zheng
 */
public class NotificationRenderFieldHolder {

    private static final ThreadLocal<Boolean> OPEN_UP_FLAG = new ThreadLocal<>();

    private static final ThreadLocal<NotificationRenderField> HOLDER = new ThreadLocal<>();

    public static void init() {
        OPEN_UP_FLAG.set(true);
    }

    /**
     * setter.
     *
     * @param val val
     */
    public static void set(NotificationRenderField val) {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag != null && openUpFlag.equals(true)) {
            HOLDER.set(val);
        }
    }

    /**
     * getter.
     *
     * @return NotificationRenderField
     */
    public static NotificationRenderField get() {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag == null || openUpFlag.equals(false)) {
            return null;
        } else {
            return HOLDER.get();
        }
    }

    public static void remove() {
        OPEN_UP_FLAG.remove();
        HOLDER.remove();
    }
}
