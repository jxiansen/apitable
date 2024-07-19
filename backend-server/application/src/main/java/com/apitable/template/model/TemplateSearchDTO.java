

package com.apitable.template.model;

import com.apitable.template.vo.AlbumVo;
import com.apitable.template.vo.TemplateSearchResult;
import java.util.List;
import java.util.Set;
import lombok.Data;

/**
 * <p>
 * Template Search DTO.
 * </p>
 */
@Data
public class TemplateSearchDTO {

    private List<AlbumVo> albums;

    private List<TemplateSearchResult> templates;

    private List<String> albumNames;

    private List<String> templateNames;

    private Set<String> tagNames;

}
