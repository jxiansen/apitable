

package com.apitable.shared.util;

import cn.hutool.core.collection.CollUtil;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * request ignore path helper.
 * singleton pattern
 * </p>
 *
 * @author Chambers
 */
public class IgnorePathHelper {

    private static List<String> ignores = null;

    /**
     * get ignore path list.
     *
     * @return ignore path list
     */
    public static List<String> getInstant() {
        if (CollUtil.isEmpty(ignores)) {
            ignores = new ArrayList<>();
        }
        return ignores;
    }
}
