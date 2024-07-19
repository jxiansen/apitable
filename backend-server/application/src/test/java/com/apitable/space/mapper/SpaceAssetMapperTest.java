

package com.apitable.space.mapper;

import java.util.Collections;
import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.space.dto.NodeAssetDTO;
import com.apitable.space.dto.SpaceAssetDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class SpaceAssetMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceAssetMapper spaceAssetMapper;

    @Test
    @Sql("/sql/space-asset-data.sql")
    void testSelectDistinctAssetIdByNodeIdIn() {
        List<Long> assetIds = spaceAssetMapper.selectDistinctAssetIdByNodeIdIn(Collections.singleton("ni41"));
        assertThat(assetIds).isNotNull();
    }

    @Test
    @Sql("/sql/space-asset-data.sql")
    void testSelectDto() {
        SpaceAssetDTO entity = spaceAssetMapper.selectDto("spc41", "ni41", 41L);
        assertThat(entity).isNotNull();
    }


    @Test
    @Sql("/sql/space-asset-data.sql")
    void testSelectDtoByAssetIdsAndType() {
        List<SpaceAssetDTO> entities = spaceAssetMapper.selectDtoByAssetIdsAndType("spc41", "ni41", 2, CollUtil.newArrayList(41L));
        assertThat(entities).isNotEmpty();
    }


    @Test
    @Sql("/sql/space-asset-data.sql")
    void testSelectNodeAssetDto() {
        List<NodeAssetDTO> entities = spaceAssetMapper.selectNodeAssetDto(CollUtil.newArrayList("ni41"));
        assertThat(entities).isNotEmpty();
    }


    @Test
    @Sql("/sql/space-asset-data.sql")
    void testCountBySpaceIdAndAssetChecksum() {
        Integer count = spaceAssetMapper.countBySpaceIdAndAssetChecksum("spc41", "checksum");
        assertThat(count).isEqualTo(1);
    }


    @Test
    @Sql({ "/sql/space-asset-data.sql", "/sql/asset-data.sql" })
    void testSelectFileSizeBySpaceId() {
        List<Integer> entities = spaceAssetMapper.selectFileSizeBySpaceId("spc41");
        assertThat(entities).isNotEmpty();
    }

}
