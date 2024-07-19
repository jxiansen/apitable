

package com.apitable.shared.support.serializer;

import cn.hutool.core.util.BooleanUtil;
import com.apitable.shared.holder.SpaceHolder;
import com.apitable.shared.util.information.InformationUtil;
import com.apitable.space.vo.SpaceGlobalFeature;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

/**
 * <p>
 * Mobile phone number encryption serialization.
 * </p>
 *
 * @author Chambers
 */
public class MobilePhoneHideSerializer extends JsonSerializer<String> {

    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider serializers)
        throws IOException {
        SpaceGlobalFeature feature = SpaceHolder.getGlobalFeature();
        if (feature == null || BooleanUtil.isTrue(feature.getMobileShowable())) {
            gen.writeString(value);
            return;
        }
        gen.writeString(InformationUtil.hideMiddle(value));
    }
}
