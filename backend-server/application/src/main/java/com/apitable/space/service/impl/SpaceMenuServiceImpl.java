

package com.apitable.space.service.impl;

import cn.hutool.core.collection.CollUtil;
import com.apitable.space.entity.SpaceMenuEntity;
import com.apitable.space.mapper.SpaceMenuMapper;
import com.apitable.space.service.ISpaceMenuService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * space menu service implementation.
 */
@Service
@Slf4j
public class SpaceMenuServiceImpl extends ServiceImpl<SpaceMenuMapper, SpaceMenuEntity>
    implements ISpaceMenuService {

    @Override
    public SpaceMenuEntity findByMenuCode(String menuCode) {
        log.info("find the space menu by menu code");
        List<SpaceMenuEntity> allSpaceMenuList = baseMapper.selectList(null);
        return CollUtil.findOne(allSpaceMenuList,
            menuEntity -> menuEntity.getMenuCode().equals(menuCode));
    }
}
