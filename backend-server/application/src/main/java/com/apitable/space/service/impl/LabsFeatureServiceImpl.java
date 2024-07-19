

package com.apitable.space.service.impl;

import static java.util.stream.Collectors.groupingBy;

import com.apitable.space.entity.LabsFeaturesEntity;
import com.apitable.space.enums.LabsFeatureEnum;
import com.apitable.space.enums.LabsFeatureScopeEnum;
import com.apitable.space.enums.LabsFeatureTypeEnum;
import com.apitable.space.mapper.LabsFeatureMapper;
import com.apitable.space.service.ILabsFeatureService;
import com.apitable.space.vo.FeatureVo;
import com.apitable.space.vo.UserSpaceLabsFeatureVo;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import jakarta.annotation.Resource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * <p>
 * Experimental Menu Service Implementation Class.
 * </p>
 */
@Service
@Slf4j
public class LabsFeatureServiceImpl extends ServiceImpl<LabsFeatureMapper, LabsFeaturesEntity>
    implements ILabsFeatureService {

    @Resource
    private LabsFeatureMapper labsFeatureMapper;

    @Override
    public List<LabsFeaturesEntity> getAvailableLabFeatures() {
        List<Integer> featureTypes = Arrays.asList(LabsFeatureTypeEnum.REVIEW.getType(),
            LabsFeatureTypeEnum.NORMAL.getType(), LabsFeatureTypeEnum.NORMAL_PERSIST.getType());
        List<LabsFeaturesEntity> availableLabFeatures =
            labsFeatureMapper.selectAllFeaturesByType(featureTypes);
        return availableLabFeatures.stream()
            .filter(labFeature -> Boolean.FALSE.equals(labFeature.getIsDeleted()))
            .collect(Collectors.toList());
    }

    @Override
    public Long getIdByFeatureKey(String featureKey) {
        return labsFeatureMapper.selectIdByFeatureKey(featureKey);
    }

    @Override
    public UserSpaceLabsFeatureVo getAvailableLabsFeature() {
        List<LabsFeaturesEntity> availableLabFeatures = this.getAvailableLabFeatures();
        UserSpaceLabsFeatureVo userSpaceLabsFeatureVo = new UserSpaceLabsFeatureVo();
        Map<Integer, List<LabsFeaturesEntity>> groupLabsFeaturesMap = availableLabFeatures.stream()
            .collect(groupingBy(LabsFeaturesEntity::getFeatureScope));
        Map<String, List<FeatureVo>> featureMap = new HashMap<>();
        groupLabsFeaturesMap.forEach((scopeCode, labsFeatures) -> {
            List<FeatureVo> featureVos = new ArrayList<>();
            for (LabsFeaturesEntity feature : labsFeatures) {
                featureVos.add(FeatureVo.builder()
                    .key(LabsFeatureEnum.ofFeatureKey(feature.getFeatureKey()))
                    .type(LabsFeatureTypeEnum.ofLabsFeatureType(feature.getType()).getFeatureKey())
                    .url(feature.getUrl())
                    .open(!feature.getIsDeleted())
                    .build());
            }
            featureMap.put(LabsFeatureScopeEnum.ofLabsFeatureScope(scopeCode).getScopeName(),
                featureVos);
            userSpaceLabsFeatureVo.setFeatures(featureMap);
        });
        return userSpaceLabsFeatureVo;
    }

    @Override
    public LabsFeatureTypeEnum getCurrentLabsFeatureType(String featureKey) {
        LabsFeaturesEntity currentLabsFeature =
            labsFeatureMapper.selectByFeatureKey(LabsFeatureEnum.ofLabsFeature(featureKey).name());
        if (Objects.isNull(currentLabsFeature)) {
            return LabsFeatureTypeEnum.UNKNOWN_LABS_FEATURE_TYPE;
        }
        return LabsFeatureTypeEnum.ofLabsFeatureType(currentLabsFeature.getType());
    }
}
