

package com.apitable.player.service.impl;

import static com.apitable.shared.constants.NotificationConstants.BODY_EXTRAS;
import static com.apitable.shared.constants.NotificationConstants.EXTRA_TOAST;
import static com.apitable.shared.constants.NotificationConstants.EXTRA_TOAST_URL;
import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.lang.Dict;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.apitable.AbstractIntegrationTest;
import com.apitable.player.dto.NotificationModelDTO;
import com.apitable.shared.component.notification.NotificationManager;
import com.apitable.shared.component.notification.NotificationTemplateId;
import com.apitable.shared.sysconfig.notification.NotificationTemplate;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import java.util.Collections;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * <p>
 * user notification service test
 * </p>
 */
public class PlayerNotificationServiceImplTest extends AbstractIntegrationTest {

    @Test
    public void testCreateNewUserWelcomeNotification() {
        Long userId = IdWorker.getId();
        // jump to third site
        NotificationTemplate template =
                notificationFactory.getTemplateById(NotificationTemplateId.NEW_USER_WELCOME_NOTIFY.getValue());
        Dict extras = Dict.create();
        if (StrUtil.isNotBlank(template.getRedirectUrl())) {
            Dict toast = Dict.create();
            toast.put(EXTRA_TOAST_URL, template.getUrl());
            extras.put(EXTRA_TOAST, toast);
        }
        NotificationManager.me().playerNotify(NotificationTemplateId.NEW_USER_WELCOME_NOTIFY,
                Collections.singletonList(userId), 0L, null, extras);
        List<NotificationModelDTO> notify = iPlayerNotificationService.getUserNotificationByTypeAndIsRead(userId,
                false);
        JSONObject extrasObj = JSONUtil.parseObj(notify.get(0).getNotifyBody());
        assertThat(extrasObj.getByPath(BODY_EXTRAS + "." + EXTRA_TOAST + "." + EXTRA_TOAST_URL)).isEqualTo(template.getUrl());

    }
}
