

package com.apitable.internal.controller;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.ResponseData;
import com.apitable.player.ro.NotificationCreateRo;
import com.apitable.player.service.IPlayerNotificationService;
import com.apitable.shared.component.scanner.annotation.ApiResource;
import com.apitable.shared.component.scanner.annotation.PostResource;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Internal Service - Notification Interface.
 */
@RestController
@ApiResource(path = "/internal/notification")
@Tag(name = "Internal")
public class InternalNotifyController {

    @Resource
    private IPlayerNotificationService playerNotificationService;

    /**
     * Send a message.
     */
    @PostResource(path = "/create", requiredLogin = false)
    @Operation(summary = "Notify Message", description = "send a message")
    public ResponseData<Void> create(
        @Valid @RequestBody List<NotificationCreateRo> notificationCreateRoList) {
        boolean bool = playerNotificationService.batchCreateNotify(notificationCreateRoList);
        if (bool) {
            return ResponseData.success();
        } else {
            throw new BusinessException("insert error");
        }
    }

}
