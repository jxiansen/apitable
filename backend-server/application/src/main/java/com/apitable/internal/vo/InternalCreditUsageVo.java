

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.CreditUnitSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.math.BigDecimal;
import lombok.Data;

/**
 * Space usage information view.
 */
@Data
@Schema(description = "space usage information view")
public class InternalCreditUsageVo {

    @Schema(description = "whether to allow over limiting", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean allowOverLimit;

    @Schema(description = "Number of used credit", example = "5.0001")
    @JsonSerialize(nullsUsing = CreditUnitSerializer.class)
    private BigDecimal usedCredit;

    @Schema(description = "the maximum credit number for ai query(unit: int)", example = "1000")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxMessageCredits;
}
