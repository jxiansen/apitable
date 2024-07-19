

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Third party integrated information of space.
 */
@Data
@Schema(description = "Third party integrated binding information of the space")
public class SpaceSocialConfig {

    @Schema(description = "Whether the third party platform binding is enabled for the space",
        example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean enabled;

    @Schema(description = "Third party platform type（1: WeCom, 2: DingTalk, 3: Lark）",
        example = "1")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer platform;

    @Schema(description = "App ID", example = "1")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private String appId;

    @Schema(description = "Application Type(1: Enterprise self built application, 2: Independent "
        + "service provider)", example = "1")
    private Integer appType;

    @Schema(description = "Authorization mode. 1: Enterprise authorization; 2: Member "
        + "Authorization", example = "1")
    private Integer authMode;

    @Schema(description = "Whether the address book is being synchronized", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean contactSyncing;
}
