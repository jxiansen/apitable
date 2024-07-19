

package com.apitable.workspace.service;

import com.apitable.control.infrastructure.ControlIdBuilder.ControlId;
import com.apitable.shared.util.page.PageInfo;
import com.apitable.workspace.dto.ControlMemberDTO;
import com.apitable.workspace.vo.ControlRoleMemberVo;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import java.util.Map;

/**
 * control member service.
 */
public interface IControlMemberService {

    /**
     * get control role member page info.
     *
     * @param page      page
     * @param spaceId   space id
     * @param controlId control id
     * @param clz       class
     * @param <T>       T extends ControlRoleMemberVo
     * @return page info
     */
    <T extends ControlRoleMemberVo> PageInfo<T> getControlRoleMemberPageInfo(
        Page<T> page, String spaceId, ControlId controlId, Class<T> clz);

    /**
     * get member control role map.
     *
     * @param spaceId   spaceId
     * @param controlId controlId
     * @return map
     */
    Map<Long, ControlMemberDTO> getMemberControlRoleMap(String spaceId,
                                                        ControlId controlId);
}
