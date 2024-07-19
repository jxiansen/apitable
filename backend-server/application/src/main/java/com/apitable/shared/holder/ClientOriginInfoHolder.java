

package com.apitable.shared.holder;

import com.apitable.shared.util.information.ClientOriginInfo;

/**
 * <p>
 * Temporary container for the client info of request.
 * </p>
 *
 * @author Shawn Deng
 */
public class ClientOriginInfoHolder {

    private static final ThreadLocal<Boolean> OPEN_UP_FLAG = new ThreadLocal<>();

    private static final ThreadLocal<ClientOriginInfo> CLIENT_ORIGIN_INFO_THREAD_LOCAL =
        new ThreadLocal<>();

    public static void init() {
        OPEN_UP_FLAG.set(true);
    }

    /**
     * setter.
     *
     * @param clientOriginInfo ClientOriginInfo
     */
    public static void set(ClientOriginInfo clientOriginInfo) {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag != null && openUpFlag.equals(true)) {
            CLIENT_ORIGIN_INFO_THREAD_LOCAL.set(clientOriginInfo);
        }
    }

    /**
     * getter.
     *
     * @return ClientOriginInfo
     */
    public static ClientOriginInfo get() {
        Boolean openUpFlag = OPEN_UP_FLAG.get();
        if (openUpFlag == null || openUpFlag.equals(false)) {
            return null;
        } else {
            return CLIENT_ORIGIN_INFO_THREAD_LOCAL.get();
        }
    }

    public static void remove() {
        OPEN_UP_FLAG.remove();
        CLIENT_ORIGIN_INFO_THREAD_LOCAL.remove();
    }
}
