

package com.apitable.player.controller;

import com.apitable.core.support.ResponseData;
import com.apitable.player.ro.ActivityStatusRo;
import com.apitable.player.service.IPlayerActivityService;
import com.apitable.shared.component.scanner.annotation.ApiResource;
import com.apitable.shared.component.scanner.annotation.PostResource;
import com.apitable.shared.context.SessionContext;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Player System - Activity API.
 */
@RestController
@Tag(name = "Player System - Activity API")
@ApiResource(path = "/player/activity")
public class ActivityController {

    @Resource
    private IPlayerActivityService iPlayerActivityService;

    /**
     * Trigger Wizard.
     */
    @PostResource(path = "/triggerWizard", requiredPermission = false)
    @Operation(summary = "Trigger Wizard", description = "Scene: After triggering the guided "
        + "click event, modify the state or the cumulative number of times.")
    public ResponseData<Void> triggerWizard(@RequestBody @Valid ActivityStatusRo ro) {
        Long userId = SessionContext.getUserId();
        iPlayerActivityService.changeStatus(userId, ro.getWizardId());
        return ResponseData.success();
    }
}
