

package com.apitable.asset.mapper;

import com.apitable.asset.entity.DeveloperAssetEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * developer attachment table mapper interface.
 */
public interface DeveloperAssetMapper extends BaseMapper<DeveloperAssetEntity> {

    /**
     * Update resource file size.
     *
     * @param id           data Id
     * @param incrFileSize incremental file size
     * @return int number of execution results
     */
    int updateFileSizeById(@Param("id") Long id, @Param("incrFileSize") Long incrFileSize);

}
