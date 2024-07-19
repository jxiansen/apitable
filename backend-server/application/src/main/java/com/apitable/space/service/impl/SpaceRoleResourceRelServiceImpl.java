

package com.apitable.space.service.impl;

import static com.apitable.workspace.enums.PermissionException.CREATE_SUB_ADMIN_ERROR;
import static com.apitable.workspace.enums.PermissionException.DELETE_ROLE_ERROR;
import static com.apitable.workspace.enums.PermissionException.UPDATE_ROLE_ERROR;

import com.apitable.core.util.ExceptionUtil;
import com.apitable.space.entity.SpaceRoleResourceRelEntity;
import com.apitable.space.mapper.SpaceRoleResourceRelMapper;
import com.apitable.space.service.ISpaceRoleResourceRelService;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * Space role resource relation service implements.
 */
@Service
@Slf4j
public class SpaceRoleResourceRelServiceImpl
    extends ServiceImpl<SpaceRoleResourceRelMapper, SpaceRoleResourceRelEntity>
    implements ISpaceRoleResourceRelService {

    @Override
    public void createBatch(List<String> roleCodes, List<String> resourceCodes) {
        log.info("Batch insert the role permission association.");
        List<SpaceRoleResourceRelEntity> entityList = new ArrayList<>();
        for (String roleCode : roleCodes) {
            for (String resourceCode : resourceCodes) {
                SpaceRoleResourceRelEntity roleResourceRel = new SpaceRoleResourceRelEntity();
                roleResourceRel.setId(IdWorker.getId());
                roleResourceRel.setRoleCode(roleCode);
                roleResourceRel.setResourceCode(resourceCode);
                entityList.add(roleResourceRel);
            }
        }
        boolean flag = SqlHelper.retBool(baseMapper.insertBatch(entityList));
        ExceptionUtil.isTrue(flag, CREATE_SUB_ADMIN_ERROR);
    }

    @Override
    public void delete(String roleCode) {
        log.info("Delete role permission");
        boolean flag = SqlHelper.retBool(baseMapper.deleteByRoleCode(roleCode));
        ExceptionUtil.isTrue(flag, DELETE_ROLE_ERROR);
    }

    @Override
    public void deleteBatch(String roleCode, List<String> resourceCodes) {
        log.info("Batch deleting role permission");
        boolean flag =
            SqlHelper.retBool(baseMapper.deleteByRoleCodeAndResourceCodes(roleCode, resourceCodes));
        ExceptionUtil.isTrue(flag, UPDATE_ROLE_ERROR);
    }

    @Override
    public List<String> getResourceCodesByRoleCode(String roleCode) {
        return baseMapper.selectResourceCodesByRoleCode(roleCode);
    }
}
