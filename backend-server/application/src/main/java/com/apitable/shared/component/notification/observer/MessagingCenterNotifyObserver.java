

package com.apitable.shared.component.notification.observer;

import com.apitable.player.ro.NotificationCreateRo;
import com.apitable.player.service.IPlayerNotificationService;
import com.apitable.shared.sysconfig.notification.NotificationConfigLoader;
import com.apitable.shared.sysconfig.notification.NotificationTemplate;
import jakarta.annotation.Resource;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 * <p>
 * self notify observer.
 * </p>
 *
 * @author zoe zheng
 */
@Component
public class MessagingCenterNotifyObserver
    extends AbstractNotifyObserver<NotificationTemplate, String> {

    @Resource
    private IPlayerNotificationService iPlayerNotificationService;

    @Override
    public NotificationTemplate getTemplate(String templateId) {
        return NotificationConfigLoader.getConfig().getTemplates().get(templateId);
    }

    @Override
    public List<?> toUser(NotificationCreateRo ro) {
        return null;
    }

    @Override
    public String renderTemplate(String context, NotificationCreateRo ro) {
        return "";
    }

    @Override
    public void notify(String context, NotificationCreateRo ro) {
        if (getTemplate(ro.getTemplateId()) == null) {
            return;
        }
        iPlayerNotificationService.createNotify(ro);
    }

    @Override
    public void notify(String context, List<NotificationCreateRo> roList) {
        iPlayerNotificationService.batchCreateNotify(roList);
    }
}
