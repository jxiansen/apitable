

package com.apitable.organization.entity;

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
 * Address Book Upload Analysis Audit Table.
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
@TableName(keepGlobalPrefix = true, value = "audit_upload_parse_record")
public class AuditUploadParseRecordEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID.
     */
    private String spaceId;

    /**
     * File save relative path.
     */
    private String fileSaveUrl;

    /**
     * Number of file lines.
     */
    private Integer rowSize;

    /**
     * Number of lines successfully parsed.
     */
    private Integer successCount;

    /**
     * Number of lines failed to parse.
     */
    private Integer errorCount;

    /**
     * Resolution failure details.
     */
    private String errorMsg;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
