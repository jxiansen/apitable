

package com.apitable.asset.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
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
 * Resource Audit Table.
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
@TableName(keepGlobalPrefix = true, value = "asset_audit")
public class AssetAuditEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Resource ID(link#xxxx_asset#id).
     */
    private Long assetId;

    /**
     * Cloud File Storage Path.
     */
    private String assetFileUrl;

    /**
     * [Redundancy]md5 Abstract.
     */
    private String assetChecksum;

    /**
     * Audit result score.
     */
    private Float auditResultScore;

    /**
     * Audit Result Suggestion, include:[“block”,”review”,”pass”].
     */
    private String auditResultSuggestion;

    /**
     * Audit Scenes,Currently supported:pul/terror/politician/ads.
     */
    private String auditScenes;

    /**
     * Auditor OpenId.
     */
    private String auditorOpenid;

    /**
     * Auditor Name.
     */
    private String auditorName;

    /**
     * Is Audited(0:No, 1:Yes).
     */
    private Boolean isAudited;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
