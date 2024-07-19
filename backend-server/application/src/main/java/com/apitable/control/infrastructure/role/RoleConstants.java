

package com.apitable.control.infrastructure.role;

/**
 * Role Constants.
 *
 * @author Shawn Deng
 */
public interface RoleConstants {

    /**
     * node role.
     */
    interface Node {

        String READER = "reader";

        String EDITOR = "editor";

        String MANAGER = "manager";

        String UPDATER = "updater";

        String OWNER = "owner";

        String ANONYMOUS = "anonymous";

        String TEMPLATE_VISITOR = "templateVisitor";
    }

    /**
     * field role.
     */
    interface Field {
        String READER = "reader";

        String EDITOR = "editor";
    }
}
