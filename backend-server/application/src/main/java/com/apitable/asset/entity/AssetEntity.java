

package com.apitable.asset.entity;

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
 * Resource Table.
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
@TableName(keepGlobalPrefix = true, value = "asset")
public class AssetEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Hash and MD5 summary of the whole file.
     */
    private String checksum;

    /**
     * Base64 of the first 32 bytes of the resource file.
     */
    private String headSum;

    /**
     * Bucket Tag.
     */
    private String bucket;

    /**
     * Bucket name.
     */
    private String bucketName;

    /**
     * File size (unit: byte).
     */
    private Integer fileSize;

    /**
     * Cloud file storage path.
     */
    private String fileUrl;

    /**
     * MimeType.
     */
    private String mimeType;

    /**
     * File extension.
     */
    private String extensionName;

    /**
     * Preview Token.
     */
    private String preview;

    /**
     * Is it a template attachment(0:No,1:Yes).
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
     * Delete tag(0:No,1:Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
