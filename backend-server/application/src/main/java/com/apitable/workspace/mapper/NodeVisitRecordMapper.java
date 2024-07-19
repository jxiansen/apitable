

package com.apitable.workspace.mapper;

import com.apitable.workspace.entity.NodeVisitRecordEntity;
import org.apache.ibatis.annotations.Param;

/**
 * node visit record mapper.
 */
public interface NodeVisitRecordMapper {

    /**
     * query node id by member id and node type.
     *
     * @param memberId member id
     * @param nodeType node type
     * @return node id
     */
    String selectNodeIdsByMemberIdAndNodeType(@Param("memberId") Long memberId,
                                              @Param("nodeType") Integer nodeType);

    /**
     * insert node visit record.
     *
     * @param entity node visit record entity
     * @return insert count
     */
    int insert(@Param("entity") NodeVisitRecordEntity entity);

    /**
     * update node ids by member id and node type.
     *
     * @param nodeIdsStr node ids string
     * @param memberId   member id
     * @param nodeType   node type
     * @return update count
     */
    int updateNodeIdsByMemberIdAndNodeType(@Param("nodeIdsStr") String nodeIdsStr,
                                           @Param("memberId") Long memberId,
                                           @Param("nodeType") Integer nodeType);

}
