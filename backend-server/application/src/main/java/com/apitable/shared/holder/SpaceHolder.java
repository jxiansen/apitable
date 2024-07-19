

package com.apitable.shared.holder;

import com.apitable.space.vo.SpaceGlobalFeature;

/**
 * <p>
 * Temporary storage container for the space ID of the current request.
 * </p>
 *
 * @author Shawn Deng
 */
public class SpaceHolder {

    private static final ThreadLocal<Boolean> OPEN_UP_FLAG = new ThreadLocal<>();

    private static final ThreadLocal<String> SPACE_HOLDER = new ThreadLocal<>();

    private static final ThreadLocal<SpaceGlobalFeature> SPACE_GLOBAL_FEATURE = new ThreadLocal<>();

    public static void init() {
        OPEN_UP_FLAG.set(true);
    }

    /**
     * setter.
     *
     * @param spaceId space id
     */
    public static void set(String spaceId) {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag != null && openUpFlag.equals(true)) {
            SPACE_HOLDER.set(spaceId);
        }
    }

    /**
     * getter.
     *
     * @return space id
     */
    public static String get() {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag == null || openUpFlag.equals(false)) {
            return null;
        } else {
            return SPACE_HOLDER.get();
        }
    }

    /**
     * put global feature.
     *
     * @param feature feature.
     */
    public static void setGlobalFeature(SpaceGlobalFeature feature) {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag != null && openUpFlag.equals(true)) {
            SPACE_GLOBAL_FEATURE.set(feature);
        }
    }

    /**
     * get global feature.
     *
     * @return global feature.
     */
    public static SpaceGlobalFeature getGlobalFeature() {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag == null || openUpFlag.equals(false)) {
            return null;
        } else {
            return SPACE_GLOBAL_FEATURE.get();
        }
    }

    /**
     * remove thread local.
     */
    public static void remove() {
        OPEN_UP_FLAG.remove();
        SPACE_HOLDER.remove();
        SPACE_GLOBAL_FEATURE.remove();
    }
}
