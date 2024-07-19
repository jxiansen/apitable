

package com.apitable.workspace.observer.remind;

import com.apitable.workspace.ro.RemindExtraRo;
import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * datasheet operation notification source data.
 * </p>
 */
@Getter
@Setter
@Accessors(chain = true)
public class NotifyDataSheetMeta {

    RemindType remindType;

    String spaceId;

    String nodeId;

    String viewId;

    String recordId;

    String recordTitle;

    String fieldName;

    String createdAt;

    RemindExtraRo extra;

    Long fromMemberId;

    Long fromUserId;

    String fromUserAvatar;

    List<Long> toMemberIds;

    String notifyId;

    RemindParameter remindParameter;

    /**
     * remind parameter.
     */
    @Getter
    @Setter
    public static class RemindParameter {

        String fromMemberName;

        Boolean fromMemberNameModified;

        @Nullable
        String spaceName;

        String nodeName;

        @Nonnull
        String notifyUrl;
    }
}
