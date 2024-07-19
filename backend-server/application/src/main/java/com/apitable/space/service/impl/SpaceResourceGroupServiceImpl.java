

package com.apitable.space.service.impl;

import com.apitable.space.entity.SpaceResourceGroupEntity;
import com.apitable.space.mapper.SpaceResourceGroupMapper;
import com.apitable.space.service.ISpaceResourceGroupService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * space resource group service implement.
 */
@Service
@Slf4j
public class SpaceResourceGroupServiceImpl
    extends ServiceImpl<SpaceResourceGroupMapper, SpaceResourceGroupEntity>
    implements ISpaceResourceGroupService {

}
