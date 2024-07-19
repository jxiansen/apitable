

package com.apitable.shared.util.ibatis;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;

/**
 * An extended interface that truly realizes batch insertion.
 *
 * @author Zoe Zheng
 */
public interface ExpandBaseMapper<T> extends BaseMapper<T> {

    /**
     * batch insert.
     *
     * @param entityList entities
     * @return executed rows
     */
    int insertBatchSomeColumn(Collection<T> entityList);
}
