

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Email Invitation Result View.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@Schema(description = "Email Invitation Result View")
public class EmailInvitationResultVO {

    @Schema(description = "Email for successful invitation", example = "[\"aaa\", \"bbb\"]")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<String> emails;
}
