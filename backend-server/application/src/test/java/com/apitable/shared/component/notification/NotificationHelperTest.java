

package com.apitable.shared.component.notification;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class NotificationHelperTest {

    @Test
    void TestIsNodeOperateWithCorrectDatasheetPath() {
        String servletPath = "/internal/spaces/spcjXzqVrjaP3/datasheets";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertTrue(isNodeOperation);
    }

    @Test
    void TestIsNodeOperateWithIncorrectDatasheetPath() {
        String servletPath = "/internal/spaces/spcjXzqVrjaP3/datasheets/abc";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertFalse(isNodeOperation);
    }

    @Test
    void TestIsNodeOperateWithCorrectNodePath() {
        String servletPath = "/internal/spaces/spcjXzqVrjaP3/nodes/dstNiC6R9MryevVaCQ/delete";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertTrue(isNodeOperation);
    }

    @Test
    void TestIsNodeOperateWithIncorrectNodePath() {
        String servletPath = "/internal/spaces/spcjXzqVrjaP3/nodes/dstNiC6R9MryevVaCQ/";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertFalse(isNodeOperation);
    }

    @Test
    void TestIsNodeOperateWithNode() {
        String servletPath = "/node/create";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertTrue(isNodeOperation);
    }

    @Test
    void TestIsNodeOperateWithQuote() {
        String servletPath = "/template/quote";
        boolean isNodeOperation = NotificationHelper.isNodeOperate(servletPath);
        Assertions.assertTrue(isNodeOperation);
    }

}
