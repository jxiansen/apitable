

package com.apitable.space.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * <p>
 * Workbench - Attachment Table.
 * </p>
 *
 * @author Mybatis Generator Tool
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@EqualsAndHashCode
@TableName(keepGlobalPrefix = true, value = "space_asset")
public class SpaceAssetEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID(link#xxxx_space#space_id).
     */
    private String spaceId;

    /**
     * Datasheet Node Id(link#xxxx_node#node_id).
     */
    private String nodeId;

    /**
     * Resource ID(link#xxxx_asset#id).
     */
    private Long assetId;

    /**
     * [Redundancy]md5 Abstract.
     */
    private String assetChecksum;

    /**
     * Number of references.
     */
    private Integer cite;

    /**
     * Type (0: user profile 1: space logo2: data table Annex 3: thumbnail 4: node description).
     */
    private Integer type;

    /**
     * Source file name, the file name of this upload.
     */
    private String sourceName;

    /**
     * [Redundancy]File Size(Unit: byte).
     */
    private Integer fileSize;

    /**
     * [Redundant] Whether it is a template attachment (0: No, 1: Yes).
     */
    private Boolean isTemplate;

    /**
     * Image Height.
     */
    private Integer height;

    /**
     * Image Width.
     */
    private Integer width;

    /**
     * Delete Tag(0:No,1:Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
