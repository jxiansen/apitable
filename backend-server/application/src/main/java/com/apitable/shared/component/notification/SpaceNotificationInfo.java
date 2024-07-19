

package com.apitable.shared.component.notification;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * notification info.
 * </p>
 *
 * @author zoe zheng
 */
@Data
@Builder
public class SpaceNotificationInfo implements Serializable {
    private static final long serialVersionUID = 3984041877744972632L;

    private String type;

    private String uuid;

    private String spaceId;

    private Object data;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String socketId;

    /**
     * node info.
     */
    @Data
    public static class NodeInfo {

        protected String nodeId;

        protected String nodeName;

        private String parentId;

        private String icon;

        private String cover;

        private Boolean nodeShared;

        private String description;

        private String preNodeId;

        private int showRecordHistory;
    }
}
