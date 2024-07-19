

package com.apitable.workspace.ro;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Button Field Properties.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ButtonFieldProperty {

    /**
     * Associated number table ID.
     */
    private String text;

    /**
     * style.
     */
    private ButtonFieldStyle style;

    /**
     * action.
     */
    private ButtonFieldAction action;

    /**
     * Button style.
     */
    @Data
    @Builder(toBuilder = true)
    public static class ButtonFieldStyle {
        /**
         * 0: Background.
         * 1: OnlyText.
         */
        private Integer type;
        /**
         * color.
         */
        private Integer color;
    }

    /**
     * Button style.
     */
    @Data
    @Builder(toBuilder = true)
    public static class ButtonFieldAction {
        /**
         * 0: OpenLink.
         * 1: TriggerAutomation.
         */
        private Integer type;

        /**
         * link.
         */
        private ButtonFieldActionLink openLink;

        /**
         * automation.
         */
        private ButtonFieldActionAutomation automation;
    }

    /**
     * Button action link.
     */
    @Data
    @Builder(toBuilder = true)
    public static class ButtonFieldActionLink {
        /**
         * 0: Text.
         * 1: Expression.
         */
        private Integer type;

        /**
         * expression or url text.
         */
        private String expression;
    }

    /**
     * Button action link.
     */
    @Data
    @Builder(toBuilder = true)
    public static class ButtonFieldActionAutomation {
        /**
         * automation id.
         */
        private String automationId;

        /**
         * trigger id.
         */
        private String triggerId;
    }
}
