

package com.apitable.organization.service;

import com.apitable.organization.vo.SearchMemberResultVo;
import com.apitable.organization.vo.SearchMemberVo;
import java.util.List;

/**
 * member search service.
 */
public interface IMemberSearchService {

    /**
     * fuzzy query member by keyword.
     *
     * @param spaceId            space id
     * @param keyword            keyword
     * @param highlightClassName the highlight style
     * @return SearchMemberResultVo
     */
    List<SearchMemberResultVo> getByName(String spaceId, String keyword, String highlightClassName);

    /**
     * fuzzy query member by member name.
     *
     * @param spaceId            space id
     * @param keyword            keyword
     * @param filter             whether to filter unadded members
     * @param highlightClassName the highlight style
     * @return SearchMemberVos
     */
    List<SearchMemberVo> getLikeMemberName(String spaceId, String keyword, Boolean filter,
                                           String highlightClassName);
}
