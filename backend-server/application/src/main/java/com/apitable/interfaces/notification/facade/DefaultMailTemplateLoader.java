

package com.apitable.interfaces.notification.facade;

import static com.apitable.shared.constants.MailPropConstants.SUBJECT_CHANGE_ADMIN;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_DATASHEET_REMIND;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_INVITE_NOTIFY;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_RECORD_COMMENT;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_REGISTER;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_REMOVE_MEMBER;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_SPACE_APPLY;
import static com.apitable.shared.constants.MailPropConstants.SUBJECT_VERIFY_CODE;

import java.util.HashMap;
import java.util.Map;

/**
 * Default Mail Template Loader.
 *
 * @author Chambers
 */
public final class DefaultMailTemplateLoader {

    private DefaultMailTemplateLoader() {
    }

    /**
     * * Get Template ID.
     *
     * @param subject mail subject
     * @return template id
     */
    public static Long getTemplateId(final String subject) {
        return Singleton.INSTANCE.getTemplateId(subject);
    }

    private enum Singleton {
        /**
         * instance.
         */
        INSTANCE;

        /**
         * subject to template id map.
         */
        private final Map<String, Long> singleton = new HashMap<>();

        Singleton() {
            singleton.put(SUBJECT_CHANGE_ADMIN, 0L);
            singleton.put(SUBJECT_INVITE_NOTIFY, 0L);
            singleton.put(SUBJECT_REGISTER, 0L);
            singleton.put(SUBJECT_RECORD_COMMENT, 0L);
            singleton.put(SUBJECT_DATASHEET_REMIND, 0L);
            singleton.put(SUBJECT_REMOVE_MEMBER, 0L);
            singleton.put(SUBJECT_SPACE_APPLY, 0L);
            singleton.put(SUBJECT_VERIFY_CODE, 0L);
        }

        public Long getTemplateId(final String subject) {
            return singleton.get(subject);
        }
    }
}
