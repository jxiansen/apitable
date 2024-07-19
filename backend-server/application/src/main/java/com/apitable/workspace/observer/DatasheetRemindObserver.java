

package com.apitable.workspace.observer;

import com.apitable.workspace.observer.remind.NotifyDataSheetMeta;
import com.apitable.workspace.observer.remind.RemindChannel;

/**
 * datasheet remind observer.
 */
public interface DatasheetRemindObserver extends DatasheetObserver {

    /**
     * remind type.
     *
     * @return remind type
     */
    RemindChannel getRemindType();

    /**
     * notify member action.
     *
     * @param meta notify data sheet meta
     */
    void notifyMemberAction(NotifyDataSheetMeta meta);

    /**
     * notify comment action.
     *
     * @param meta notify data sheet meta
     */
    void notifyCommentAction(NotifyDataSheetMeta meta);
}
