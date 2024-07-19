

package com.apitable.space.mapper;

import com.apitable.space.entity.LabsApplicantEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 * Laboratory Function Application Form Mapper Interface.
 * </p>
 */
public interface LabsApplicantMapper extends BaseMapper<LabsApplicantEntity> {

    /**
     * Query its experimental functions according to user ID and space ID.
     *
     * @param applicants Applicant ID: user ID and space ID
     * @return featureKey List
     */
    List<String> selectUserFeaturesByApplicant(@Param("applicants") List<String> applicants);

    /**
     * Query the unique identifier of a laboratory function according to its type.
     *
     * @param type Types of laboratory functions
     * @return featureKey Laboratory function unique identifier
     */
    List<String> selectFeatureKeyByType(@Param("type") Integer type);

    /**
     * Query the specified application record according to the application and feature key.
     *
     * @param applicant  Applicant ID, which can be user ID or space ID
     * @param featureKey Experimental function identification
     * @return LabsApplicantEntity
     */
    LabsApplicantEntity selectApplicantAndFeatureKey(@Param("applicant") String applicant,
                                                     @Param("featureKey") String featureKey);
}
