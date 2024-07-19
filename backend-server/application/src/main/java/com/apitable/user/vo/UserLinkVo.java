

package com.apitable.user.vo;

import static com.apitable.shared.constants.DateFormatConstants.TIME_NORM_PATTERN;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * Account association vo.
 */
@Data
@Schema(description = "Account association vo")
public class UserLinkVo {

    @Schema(description = "Association Type：0DingTalk；1WeChat", example = "1")
    private Integer type;

    @Schema(description = "Account nickname", example = "A short song line")
    private String nickName;

    @Schema(description = "Binding time", example = "2020/2/2")
    @JsonFormat(pattern = TIME_NORM_PATTERN)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createTime;
}
