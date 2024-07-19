

package com.apitable.space.controller;

import com.apitable.core.support.ResponseData;
import com.apitable.shared.component.TaskManager;
import com.apitable.shared.component.notification.NotificationTemplateId;
import com.apitable.shared.component.notification.annotation.Notification;
import com.apitable.shared.component.scanner.annotation.ApiResource;
import com.apitable.shared.component.scanner.annotation.PostResource;
import com.apitable.shared.context.SessionContext;
import com.apitable.space.ro.SpaceJoinApplyRo;
import com.apitable.space.ro.SpaceJoinProcessRo;
import com.apitable.space.service.ISpaceApplyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Apply Joining Space Api.
 */
@RestController
@Tag(name = "Space - Apply Joining Space Api")
@ApiResource(path = "/space/apply")
public class SpaceApplyController {

    @Resource
    private ISpaceApplyService iSpaceApplyService;

    /**
     * Applying to join the space.
     */
    @Notification(templateId = NotificationTemplateId.SPACE_JOIN_APPLY)
    @PostResource(path = "/join", requiredPermission = false)
    @Operation(summary = "Applying to join the space")
    public ResponseData<Void> apply(
        @RequestBody @Valid final SpaceJoinApplyRo ro) {
        Long userId = SessionContext.getUserId();
        // generate application records
        Long applyId = iSpaceApplyService.create(userId, ro.getSpaceId());
        // send apply notifications
        TaskManager.me().execute(() ->
            iSpaceApplyService.sendApplyNotify(userId, ro.getSpaceId(), applyId));
        return ResponseData.success();
    }

    /**
     * Process joining application.
     */
    @PostResource(path = "/process", requiredPermission = false)
    @Operation(summary = "Process joining application")
    public ResponseData<Void> process(
        @RequestBody @Valid final SpaceJoinProcessRo ro) {
        Long userId = SessionContext.getUserId();
        iSpaceApplyService.process(userId, ro.getNotifyId(), ro.getAgree());
        return ResponseData.success();
    }

}
