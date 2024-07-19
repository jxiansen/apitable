

package com.apitable.control.mapper;

import com.apitable.control.entity.ControlRoleEntity;
import com.apitable.workspace.dto.ControlRoleInfo;
import com.apitable.workspace.dto.ControlRoleUnitDTO;
import com.baomidou.mybatisplus.annotation.InterceptorIgnore;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Permission Control Unit Role Mapper.
 * </p>
 */
public interface ControlRoleMapper extends BaseMapper<ControlRoleEntity> {

    /**
     * Query all roles of the specified control unit.
     *
     * @param controlId Control unit ID
     * @return entities
     */
    List<ControlRoleEntity> selectByControlId(@Param("controlId") String controlId);

    /**
     * Query all roles of multiple control units.
     *
     * @param controlIds Control unit ID set
     * @return entities
     */
    List<ControlRoleEntity> selectByControlIds(@Param("controlIds") List<String> controlIds);

    /**
     * Query all roles of the specified control unit and organization unit.
     *
     * @param controlId Control unit ID
     * @param unitId    Org Unit ID
     * @return entities
     */
    List<ControlRoleEntity> selectByControlIdAndUnitId(@Param("controlId") String controlId,
                                                       @Param("unitId") Long unitId);

    /**
     * Query Org Unit ID.
     *
     * @param controlId Control unit ID
     * @param roleCode  Role Code
     * @return unitId
     */
    Long selectUnitIdAndControlIdAndRoleCode(@Param("controlId") String controlId,
                                             @Param("roleCode") String roleCode);

    /**
     * Query Role Code.
     *
     * @param controlId Control unit ID
     * @param unitId    Org Unit ID
     * @return RoleCode
     */
    String selectRoleCodeByControlIdAndUnitId(@Param("controlId") String controlId,
                                              @Param("unitId") Long unitId);

    /**
     * Batch query of Role Code.
     *
     * @param controlId Control unit ID
     * @param unitIds   Org Unit ID
     * @return RoleCode
     */
    List<ControlRoleInfo> selectControlRoleInfoByControlIdAndUnitIds(
        @Param("controlId") String controlId, @Param("unitIds") List<Long> unitIds);


    /**
     * Query the role and Org Unit ID of the control unit.
     *
     * @param controlIds Control unit ID Collection
     * @return NodeUnitRole
     */
    List<ControlRoleInfo> selectControlRoleInfoByControlIds(
        @Param("controlIds") Collection<String> controlIds);

    /**
     * Query the role and organization unit information of the control unit.
     *
     * @param controlId Control unit ID
     * @return ControlRoleUnitDTO
     */
    @InterceptorIgnore(illegalSql = "true")
    List<ControlRoleUnitDTO> selectControlRoleUnitDtoByControlId(
        @Param("controlId") String controlId);

    /**
     * Bulk Insert.
     *
     * @param entities Entity Collection
     * @return Number of execution results
     */
    int insertBatch(@Param("entities") List<ControlRoleEntity> entities);

    /**
     * Find permissions by permission ID and organization ID.
     *
     * @param controlId Permission ID
     * @param unitIds   Org Unit ID
     * @return entities
     */
    List<ControlRoleEntity> selectDeletedRole(@Param("controlId") String controlId,
                                              @Param("unitIds") List<Long> unitIds,
                                              @Param("roleCode") String roleCode);

    /**
     * Modify Delete Field.
     *
     * @param ids       Primary key ID
     * @param userId    Modify User ID
     * @param isDeleted Delete
     * @return Number of affected record lines
     */
    Integer updateIsDeletedByIds(@Param("userId") Long userId, @Param("ids") List<Long> ids,
                                 @Param("isDeleted") Boolean isDeleted);

    /**
     * Find Deleted Collections.
     *
     * @param controlId Permission ID
     * @param unitIds   Org Unit ID
     * @param roleCodes Role Code
     * @return entities
     */
    List<ControlRoleEntity> selectDeletedRoleByRoleCodes(@Param("controlId") String controlId,
                                                         @Param("unitIds") List<Long> unitIds,
                                                         @Param("roleCodes")
                                                         List<String> roleCodes);

    /**
     * Query Org Unit ID.
     *
     * @param controlId     Control unit ID
     * @param roleCode      Role Code
     * @param ignoreDeleted Ignore Delete
     * @return unitId
     */
    ControlRoleEntity selectByControlIdAndUnitIdAndRoleCode(@Param("controlId") String controlId,
                                                            @Param("unitId") Long unitId,
                                                            @Param("roleCode") String roleCode,
                                                            @Param("ignoreDeleted")
                                                            boolean ignoreDeleted);

    /**
     * Query all roles of the specified control unit.
     *
     * @param controlId     Control unit ID
     * @param unitIds       Org Unit ID
     * @param ignoreDeleted Ignore delete flag
     * @return entities
     */
    List<ControlRoleEntity> selectByControlIdAndUnitIds(@Param("controlId") String controlId,
                                                        @Param("unitIds") List<Long> unitIds,
                                                        @Param("ignoreDeleted")
                                                        boolean ignoreDeleted);

    /**
     * Query all roles of the specified control unit.
     *
     * @param controlIds Control unit ID List
     * @return id List
     */
    List<Long> selectIdByControlIds(@Param("controlIds") List<String> controlIds);

    /**
     * Query all roles of the specified organizational unit.
     *
     * @param unitIds Org Unit ID List
     * @return id List
     */
    List<Long> selectIdByUnitIds(@Param("unitIds") List<Long> unitIds);

    /**
     * Query all roles of the specified control unit and multiple organization units.
     *
     * @param controlId Control unit ID
     * @param unitIds   Org Unit ID List
     * @return id List
     */
    List<Long> selectIdByControlIdAndUnitIds(@Param("controlId") String controlId,
                                             @Param("unitIds") List<Long> unitIds);

    /**
     * Query all roles of the specified control unit and organization unit.
     *
     * @param controlId Control unit ID
     * @param unitId    Org Unit ID
     * @return id List
     */
    List<Long> selectIdByControlIdAndUnitId(@Param("controlId") String controlId,
                                            @Param("unitId") Long unitId);
}
