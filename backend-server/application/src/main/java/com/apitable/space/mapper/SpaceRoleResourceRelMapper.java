

package com.apitable.space.mapper;


import com.apitable.space.entity.SpaceRoleResourceRelEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * space role resource rel mapper.
 */
public interface SpaceRoleResourceRelMapper extends BaseMapper<SpaceRoleResourceRelEntity> {

    /**
     * insert batch.
     *
     * @param entities rel
     * @return affected rows
     */
    int insertBatch(@Param("entities") List<SpaceRoleResourceRelEntity> entities);

    /**
     * delete by role code.
     *
     * @param roleCode role code
     * @return affected rows
     */
    int deleteByRoleCode(@Param("roleCode") String roleCode);

    /**
     * delete by role code and resource codes.
     *
     * @param roleCode      role code
     * @param resourceCodes resource codes
     * @return affected rows
     */
    int deleteByRoleCodeAndResourceCodes(@Param("roleCode") String roleCode,
                                         @Param("resourceCodes") List<String> resourceCodes);

    /**
     * select role code by resource codes.
     *
     * @param resourceCodes resource codes
     * @return RoleCode
     */
    List<String> selectRoleCodeByResourceCodes(@Param("resourceCodes") List<String> resourceCodes);

    /**
     * batch delete by role codes.
     *
     * @param roleCodes role codes
     * @return affected rows
     */
    int batchDeleteByRoleCodes(@Param("roleCodes") List<String> roleCodes);

    /**
     * select resource codes by role code.
     *
     * @param roleCode role code
     * @return ResourceCodes
     */
    List<String> selectResourceCodesByRoleCode(@Param("roleCode") String roleCode);
}
