

package com.apitable.space.mapper;

import com.apitable.space.dto.SpaceLinkDTO;
import com.apitable.space.entity.SpaceInviteLinkEntity;
import com.apitable.space.vo.SpaceLinkVo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * space invite link mapper.
 */
public interface SpaceInviteLinkMapper extends BaseMapper<SpaceInviteLinkEntity> {

    /**
     * query link view .
     *
     * @param memberId member id
     * @return invite link
     */
    List<SpaceLinkVo> selectLinkVo(@Param("memberId") Long memberId);

    /**
     * query id by team id and member id.
     *
     * @param teamId   team id
     * @param memberId member id
     * @return ID
     */
    Long selectIdByTeamIdAndMemberId(@Param("teamId") Long teamId,
                                     @Param("memberId") Long memberId);

    /**
     * modify token by id.
     * updateById:the logical deletion cannot be removed
     *
     * @param token the invite token
     * @param id    id
     * @return affected rows
     */
    int updateInviteTokenById(@Param("token") String token, @Param("id") Long id);

    /**
     * logically delete.
     *
     * @param teamId    team id
     * @param memberIds member ids
     * @return affected rows
     */
    int delByTeamIdAndMemberId(@Param("teamId") Long teamId, @Param("list") List<Long> memberIds);

    /**
     * query by token.
     *
     * @param token the invite token
     * @return the info about space, team and creator
     */
    SpaceLinkDTO selectDtoByToken(@Param("token") String token);

    /**
     * add up the number of successful invitees.
     *
     * @param token the invite token
     * @return affected rows
     */
    int updateInviteNumByInviteToken(@Param("token") String token);

    /**
     * gets a list of member ids with valid links.
     *
     * @param spaceId space id
     * @return member ids
     */
    List<Long> selectCreatorBySpaceId(@Param("spaceId") String spaceId);

    /**
     * logically deleted.
     *
     * @param teamId   team id
     * @param creators creators
     * @return affected rows
     */
    int updateByTeamIdAndCreators(@Param("teamId") Long teamId,
                                  @Param("creators") List<Long> creators);

    /**
     * logically deleted.
     *
     * @param teamIds team ids
     * @param creator creator
     * @return affected rows
     */
    int updateByTeamIdsAndCreator(@Param("teamIds") List<Long> teamIds,
                                  @Param("creator") Long creator);

    /**
     * logically deleted.
     *
     * @param creators creators
     * @return affected rows
     */
    int updateByCreators(@Param("creators") List<Long> creators);

    /**
     * query id by team id.
     *
     * @param teamIds team ids
     * @return invite ids
     */
    Long selectIdByTeamId(@Param("teamId") Long teamIds);

    /**
     * query id by team id list.
     *
     * @param teamIds team ids
     * @return invite ids
     */
    List<Long> selectIdByTeamIds(@Param("teamIds") Collection<Long> teamIds);
}
