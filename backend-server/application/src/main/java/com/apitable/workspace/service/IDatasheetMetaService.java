

package com.apitable.workspace.service;

import com.apitable.internal.dto.SimpleDatasheetMetaDTO;
import com.apitable.workspace.dto.DatasheetMetaDTO;
import com.apitable.workspace.dto.DatasheetSnapshot;
import com.apitable.workspace.entity.DatasheetMetaEntity;
import com.apitable.workspace.ro.MetaOpRo;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * datasheet meta service.
 */
public interface IDatasheetMetaService {

    /**
     * save batch.
     *
     * @param metaEntities meta
     */
    void batchSave(List<DatasheetMetaEntity> metaEntities);

    /**
     * get by datasheet id.
     *
     * @param dstId datasheet id
     * @return DatasheetMetaVo
     */
    SimpleDatasheetMetaDTO findByDstId(String dstId);

    /**
     * get dto by datasheet id list.
     *
     * @param dstIds datasheet ids
     * @return DatasheetMetaDTO
     */
    List<DatasheetMetaDTO> findMetaDtoByDstIds(@Param("list") List<String> dstIds);

    /**
     * create.
     *
     * @param userId   user id
     * @param dstId    datasheet id
     * @param metaData meta data
     */
    void create(Long userId, String dstId, String metaData);

    /**
     * update meta.
     *
     * @param userId user id
     * @param dstId  datasheet id
     * @param meta   request parameters
     */
    void edit(Long userId, String dstId, MetaOpRo meta);

    /**
     * Check whether the specified view of the number table exists.
     *
     * @param dstId  datasheet id
     * @param viewId view id
     */
    void checkViewIfExist(String dstId, String viewId);

    /**
     * get data datasheet source information.
     *
     * @param dstId datasheet id
     * @return DatasheetSnapshot
     */
    DatasheetSnapshot getMetaByDstId(String dstId);

    /**
     * Determine whether the datasheets contain member fields.
     *
     * @param dstIds datasheet ids
     * @return boolean
     */
    boolean judgeContainMemberField(List<String> dstIds);

    /**
     * bulk remove.
     *
     * @param dstIds datasheet id list
     * @param isDel  delete status
     * @param userId update user
     */
    void batchRemove(List<String> dstIds, boolean isDel, Long userId);
}
