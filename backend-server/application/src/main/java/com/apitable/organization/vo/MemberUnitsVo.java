

package com.apitable.organization.vo;

import com.apitable.core.support.serializer.NumberListToStringListSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Organizational unit to which the member belongs.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Organizational unit to which the member belongs")
public class MemberUnitsVo {

    @Schema(description = "Org Unit ID List", type = "List",
        example = "[\"10101\",\"10102\",\"10103\",\"10104\"]")
    @JsonSerialize(using = NumberListToStringListSerializer.class,
        nullsUsing = NullArraySerializer.class)
    private List<Long> unitIds;
}
