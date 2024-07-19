

package com.apitable.space.controller;

import com.apitable.core.support.ResponseData;
import com.apitable.shared.component.scanner.annotation.ApiResource;
import com.apitable.shared.component.scanner.annotation.GetResource;
import com.apitable.space.service.ILabsFeatureService;
import com.apitable.space.vo.UserSpaceLabsFeatureVo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;

/**
 * Laboratory module experimental function interface.
 */
@RestController
@Tag(name = "Laboratory module_ Experimental function interface")
@ApiResource(path = "/labs")
public class LabsFeatureController {

    @Resource
    private ILabsFeatureService iLabsFeatureService;

    /**
     * Get Lab Function List.
     */
    @GetResource(path = "/features", requiredPermission = false)
    @Operation(summary = "Get Lab Function List")
    public ResponseData<UserSpaceLabsFeatureVo> showAvailableLabsFeatures() {
        // Get a list of available experiments
        return ResponseData.success(iLabsFeatureService.getAvailableLabsFeature());
    }
}
