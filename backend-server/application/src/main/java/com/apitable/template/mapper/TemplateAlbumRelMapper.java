

package com.apitable.template.mapper;

import com.apitable.template.entity.TemplateAlbumRelEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Template Center - Template Album Rel Mapper.
 * </p>
 */
public interface TemplateAlbumRelMapper extends BaseMapper<TemplateAlbumRelEntity> {

    /**
     * query album ids by relate id and type.
     */
    List<String> selectAlbumIdByRelateIdAndType(@Param("relateId") String relateId,
                                                @Param("type") Integer type);

    /**
     * query relate ids by albumId id and type.
     */
    List<String> selectRelateIdByAlbumIdAndType(@Param("albumId") String albumId,
                                                @Param("type") Integer type);

    /**
     * batch insert.
     */
    int insertBatch(@Param("entities") List<TemplateAlbumRelEntity> entities);

    /**
     * batch delete.
     */
    int deleteBatch();

}
