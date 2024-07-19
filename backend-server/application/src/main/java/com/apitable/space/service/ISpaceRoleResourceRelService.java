

package com.apitable.space.service;


import com.apitable.space.entity.SpaceRoleResourceRelEntity;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * space role resource rel service.
 */
public interface ISpaceRoleResourceRelService extends IService<SpaceRoleResourceRelEntity> {

    /**
     * space roles are associated with permissions.
     *
     * @param roleCodes     roleCodes
     * @param resourceCodes resourceCodes
     */
    void createBatch(List<String> roleCodes, List<String> resourceCodes);

    /**
     * delete space role.
     *
     * @param roleCode roleCode
     */
    void delete(String roleCode);

    /**
     * delete space role's permission.
     *
     * @param roleCode      roleCode
     * @param resourceCodes resourceCodes
     */
    void deleteBatch(String roleCode, List<String> resourceCodes);

    /**
     * get resource codes by role code.
     *
     * @param roleCode role code
     * @return resource codes
     */
    List<String> getResourceCodesByRoleCode(String roleCode);
}
