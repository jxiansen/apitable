

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Space Station Data Creator View.
 * </p>
 */
@Data
@Schema(description = "Data Creator View")
public class CreatedMemberInfoVo {

    @Schema(description = "Node Creator - Name")
    private String memberName;

    @Schema(description = "Node Creator - avatar",
        example = "http://wwww.apitable.com/2019/11/12/17123187253.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String avatar;

}
