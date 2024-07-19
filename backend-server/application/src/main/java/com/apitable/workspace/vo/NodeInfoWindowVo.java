

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.LocalDateTimeToMilliSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Node information window vo.
 * </p>
 */
@Data
@Builder(toBuilder = true)
public class NodeInfoWindowVo {

    /**
     * Node ID.
     */
    private String nodeId;

    /**
     * Node Name.
     */
    private String nodeName;

    /**
     * Node Type.
     */
    private Integer nodeType;

    /**
     * Node icon.
     */
    private String icon;

    /**
     * Created by.
     */
    private MemberInfo creator;

    /**
     * Recently modified by.
     */
    private MemberInfo lastModifier;

    /**
     * member info.
     */
    @Data
    @Builder(toBuilder = true)
    public static class MemberInfo {

        /**
         * Member Name.
         */
        private String memberName;

        /**
         * Member avatar.
         */
        @JsonSerialize(nullsUsing = NullStringSerializer.class,
            using = ImageSerializer.class)
        private String avatar;

        /**
         * default avatar number.
         */
        private Integer avatarColor;

        /**
         * user nick name.
         */
        private String nickName;

        /**
         * Time stamp.
         */
        @JsonSerialize(using = LocalDateTimeToMilliSerializer.class)
        private LocalDateTime time;

        /**
         * Whether the member is activated.
         */
        private Boolean isActive;

        /**
         * Delete member.
         */
        @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
        private Boolean isDeleted;
    }
}
