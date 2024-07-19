

package com.apitable.shared.validator;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.context.SessionContext;
import com.apitable.shared.holder.MemberHolder;
import com.apitable.workspace.service.INodeService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.extern.slf4j.Slf4j;

/**
 * node id validator.
 *
 * @author Shawn Deng
 */
@Slf4j
public class NodeValidator implements ConstraintValidator<NodeMatch, String> {

    @Override
    public boolean isValid(String nodeId, ConstraintValidatorContext context) {
        Long userId = SessionContext.getUserId();
        Long memberId = SpringContextHolder.getBean(INodeService.class)
            .getMemberIdByUserIdAndNodeId(userId, nodeId);
        if (memberId == null) {
            return false;
        }
        MemberHolder.set(memberId);
        return true;
    }
}
