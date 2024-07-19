

package com.apitable.template.mapper;

import com.apitable.template.entity.TemplateAlbumEntity;
import com.apitable.template.model.TemplateAlbumDto;
import com.apitable.template.vo.AlbumContentVo;
import com.apitable.template.vo.AlbumVo;
import com.baomidou.mybatisplus.annotation.InterceptorIgnore;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Template Center - Template Album Mapper.
 * </p>
 */
public interface TemplateAlbumMapper extends BaseMapper<TemplateAlbumEntity> {

    /**
     * query all album ids by i18n.
     */
    @InterceptorIgnore(illegalSql = "true")
    List<String> selectAllAlbumIdsByI18nName(@Param("i18nName") String i18nName);

    /**
     * query album views by album ids.
     */
    List<AlbumVo> selectAlbumVosByAlbumIds(@Param("albumIds") List<String> albumIds);

    /**
     * query album views by i18nName and likeName.
     */
    @InterceptorIgnore(illegalSql = "true")
    List<AlbumVo> selectAlbumVosByI18nNameAndNameLike(@Param("i18nName") String i18nName,
                                                      @Param("likeName") String likeName);

    /**
     * query album content view by album id.
     */
    AlbumContentVo selectAlbumContentVoByAlbumId(@Param("albumId") String albumId);

    /**
     * query all template album.
     */
    @InterceptorIgnore(illegalSql = "true")
    List<TemplateAlbumDto> selectAllTemplateAlbumDto();

    /**
     * batch insert.
     */
    int insertBatch(@Param("entities") List<TemplateAlbumEntity> entities);

    /**
     * remove by albumIds.
     */
    int removeByAlbumIds(@Param("albumIds") List<String> albumIds,
                         @Param("updatedBy") Long updatedBy);
}
