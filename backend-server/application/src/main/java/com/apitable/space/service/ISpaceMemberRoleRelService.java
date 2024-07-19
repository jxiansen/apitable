

package com.apitable.space.service;

import com.apitable.space.entity.SpaceMemberRoleRelEntity;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * space member role relation service interface.
 */
public interface ISpaceMemberRoleRelService extends IService<SpaceMemberRoleRelEntity> {

    /**
     * creating administrator.
     *
     * @param spaceId   space id
     * @param memberIds memberIds
     * @param roleCode  roleCode
     */
    void create(String spaceId, List<Long> memberIds, String roleCode);

    /**
     * get entity by id.
     *
     * @param id member role id
     * @return SpaceMemberRoleRelEntity
     */
    SpaceMemberRoleRelEntity getEntityById(Long id);

    /**
     * change the member id of the space role.
     *
     * @param memberRoleId member role id
     * @param memberId     memberId
     */
    void updateMemberIdById(Long memberRoleId, Long memberId);

    /**
     * get member id list by resource codes in space.
     *
     * @param spaceId            space id
     * @param resourceGroupCodes resourceGroupCodes
     * @return member ids
     */
    List<Long> getMemberIdListByResourceGroupCodes(String spaceId, List<String> resourceGroupCodes);

    /**
     * get member role codes in space.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @return member ids
     */
    String getRoleCodeByMemberId(String spaceId, Long memberId);

    /**
     * get role codes in space.
     *
     * @param spaceId space id
     * @return role codes
     */
    List<String> getRoleCodesBySpaceId(String spaceId);
}
