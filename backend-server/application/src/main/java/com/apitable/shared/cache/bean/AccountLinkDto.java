

package com.apitable.shared.cache.bean;

import static com.apitable.shared.constants.DateFormatConstants.TIME_SIMPLE_PATTERN;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * <p>
 * account link object.
 * </p>
 *
 * @author Chambers
 */
@Data
public class AccountLinkDto {

    /**
     * Link type.
     */
    private Integer type;

    /**
     * nickname.
     */
    private String nickName;

    @JsonFormat(pattern = TIME_SIMPLE_PATTERN)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createTime;
}
