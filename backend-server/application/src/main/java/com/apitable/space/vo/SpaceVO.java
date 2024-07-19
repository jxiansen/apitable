

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Space View.
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Space List View")
public class SpaceVO {

    @Schema(description = "Space ID", example = "spc10")
    private String spaceId;

    @Schema(description = "Name", example = "This is a space")
    private String name;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Icon", example = "https://...")
    private String logo;

    @Schema(description = "Whether there are red dots", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean point;

    @Schema(description = "Whether it is the main administrator of the space", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean admin;

    @Schema(description = "Whether it is in pre deletion status", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean preDeleted;

    @Schema(description = "Maximum total number of subscription plan members")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long maxSeat;

    @Schema(description = "Space domain name")
    private String spaceDomain;

    @Schema(description = "Third party integration binding information")
    private SpaceSocialConfig social;
}
