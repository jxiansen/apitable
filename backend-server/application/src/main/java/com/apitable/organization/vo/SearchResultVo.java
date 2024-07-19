

package com.apitable.organization.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Search Results View.
 * </p>
 */
@Data
@Schema(description = "Search Results View")
public class SearchResultVo {

    @Schema(description = "Department List")
    private List<SearchTeamResultVo> teams = new ArrayList<>();

    @Schema(description = "Member List")
    private List<SearchMemberResultVo> members = new ArrayList<>();
}
