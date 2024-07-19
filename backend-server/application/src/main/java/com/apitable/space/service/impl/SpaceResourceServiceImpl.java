

package com.apitable.space.service.impl;

import static com.apitable.space.enums.SpacePermissionException.NO_RESOURCE_ASSIGNABLE;

import com.apitable.core.util.ExceptionUtil;
import com.apitable.core.util.SqlTool;
import com.apitable.space.entity.SpaceResourceEntity;
import com.apitable.space.mapper.SpaceResourceMapper;
import com.apitable.space.service.ISpaceResourceService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * space resource service implementation.
 */
@Service
@Slf4j
public class SpaceResourceServiceImpl extends ServiceImpl<SpaceResourceMapper, SpaceResourceEntity>
    implements ISpaceResourceService {

    @Override
    public void checkResourceAssignable(List<String> resourceCodes) {
        log.info("check whether resource assignable");
        int count = SqlTool.retCount(baseMapper.selectAssignableCountInResourceCode(resourceCodes));
        ExceptionUtil.isTrue(resourceCodes.size() == count, NO_RESOURCE_ASSIGNABLE);
    }
}
