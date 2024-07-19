

package com.apitable.template.service;

import com.apitable.template.entity.TemplateAlbumEntity;
import com.apitable.template.vo.AlbumContentVo;
import com.apitable.template.vo.AlbumVo;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * <p>
 * Template Center - Template Album Service.
 * </p>
 */
public interface ITemplateAlbumService extends IService<TemplateAlbumEntity> {

    /**
     * get template album views by album ids.
     *
     * @param albumIds album ids
     */
    List<AlbumVo> getAlbumVosByAlbumIds(List<String> albumIds);

    /**
     * get template album views by category code.
     *
     * @param categoryCode category code
     */
    List<AlbumVo> getAlbumVosByCategoryCode(String categoryCode);

    /**
     * get recommended albums.
     *
     * @param lang           locale
     * @param maxCount       max count
     * @param excludeAlbumId exclude album id
     */
    List<AlbumVo> getRecommendedAlbums(String lang, Integer maxCount, String excludeAlbumId);

    /**
     * fuzzy search album.
     *
     * @param lang    locale
     * @param keyword keyword
     */
    List<AlbumVo> searchAlbums(String lang, String keyword);

    /**
     * get album content view.
     *
     * @param albumId album id
     */
    AlbumContentVo getAlbumContentVo(String albumId);
}
