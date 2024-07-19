

package com.apitable.space.service.impl;


import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractIntegrationTest;
import com.apitable.mock.bean.MockUserSpace;
import com.apitable.space.dto.DatasheetStaticsDTO;
import com.apitable.workspace.enums.ViewType;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;

public class StatisticsServiceImplTest extends AbstractIntegrationTest {

    @Test
    void testGetDatasheetStaticsBySpaceIdFromCacheForNull() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        DatasheetStaticsDTO dto =
            iStaticsService.getDatasheetStaticsBySpaceIdFromCache(userSpace.getSpaceId());
        assertThat(dto).isNull();
    }

    @Test
    void testGetDatasheetStaticsBySpaceIdFromCache() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        DatasheetStaticsDTO dto = new DatasheetStaticsDTO();
        dto.setGanttViews(1L);
        iStaticsService.setDatasheetStaticsBySpaceIdToCache(userSpace.getSpaceId(), dto);
        DatasheetStaticsDTO result =
            iStaticsService.getDatasheetStaticsBySpaceIdFromCache(userSpace.getSpaceId());
        assertThat(result).isNotNull();
        assertThat(result.getGanttViews()).isEqualTo(1L);
    }

    @Test
    void setDatasheetStaticsBySpaceIdAndViewTypeWhileNotCacheable() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        Map<Integer, Long> viewCount = new HashMap<>();
        viewCount.put(ViewType.KANBAN.getType(), 1L);
        iStaticsService.updateDatasheetViewCountStaticsBySpaceId(userSpace.getSpaceId(),
            viewCount);
        DatasheetStaticsDTO result =
            iStaticsService.getDatasheetStaticsBySpaceIdFromCache(userSpace.getSpaceId());
        assertThat(result).isNull();
    }

    @Test
    void setDatasheetStaticsBySpaceIdAndViewType() {
        MockUserSpace userSpace = createSingleUserAndSpace();
        DatasheetStaticsDTO dto = new DatasheetStaticsDTO();
        dto.setGanttViews(1L);
        iStaticsService.setDatasheetStaticsBySpaceIdToCache(userSpace.getSpaceId(), dto);
        Map<Integer, Long> viewCount = new HashMap<>();
        viewCount.put(ViewType.GANTT.getType(), 1L);
        iStaticsService.updateDatasheetViewCountStaticsBySpaceId(userSpace.getSpaceId(),
            viewCount);
        DatasheetStaticsDTO result =
            iStaticsService.getDatasheetStaticsBySpaceIdFromCache(userSpace.getSpaceId());
        assertThat(result).isNotNull();
        assertThat(result.getGanttViews()).isEqualTo(2L);
    }
}
