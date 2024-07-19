

package com.apitable.interfaces.social.event;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * template quote event.
 */
@Data
@AllArgsConstructor
public class TemplateQuoteEvent implements SocialEvent {

    private String spaceId;

    private String nodeId;

    private String templateId;

    private Long memberId;

    @Override
    public CallEventType getEventType() {
        return CallEventType.TEMPLATE_QUOTE;
    }
}
