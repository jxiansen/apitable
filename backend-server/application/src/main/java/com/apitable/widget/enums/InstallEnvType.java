

package com.apitable.widget.enums;

import cn.hutool.core.util.StrUtil;
import com.apitable.core.exception.BusinessException;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * Mini Program Installation Environment Type.
 * </p>
 *
 * @author liuzijing
 */
@Getter
@AllArgsConstructor
public enum InstallEnvType {

    DASHBOARD("dashboard", "01"),

    PANEL("panel", "02"),

    ;

    @JsonValue
    private final String value;

    private final String code;

    /**
     * transform value to type.
     *
     * @param value value
     * @return type
     */
    public static InstallEnvType toType(String value) {
        for (InstallEnvType type : InstallEnvType.values()) {
            if (type.getValue().equals(value)) {
                return type;
            }
        }
        throw new BusinessException("Unknown installation environment type type");
    }

    /**
     * transform code to type.
     *
     * @param codes code list
     * @return type
     */
    public static List<String> toValueList(String codes) {
        List<InstallEnvType> installEnvTypes = InstallEnvType.toTypeList(codes);
        List<String> list = new ArrayList<>();
        for (InstallEnvType installEnvType : installEnvTypes) {
            list.add(installEnvType.value);
        }
        return list;
    }

    /**
     * transform code to type.
     *
     * @param codes code list
     * @return type list
     */
    public static List<InstallEnvType> toTypeList(String codes) {
        List<InstallEnvType> installEnvTypes = new ArrayList<>();
        String[] split = StrUtil.split(codes, 2);
        for (String s : split) {
            for (InstallEnvType type : InstallEnvType.values()) {
                if (type.getCode().equals(s)) {
                    installEnvTypes.add(type);
                }
            }
        }
        return installEnvTypes.stream().distinct().collect(Collectors.toList());
    }

    /**
     * get install env code.
     *
     * @param installEnv install env
     * @return code
     */
    public static String getInstallEnvCode(List<String> installEnv) {
        StringBuilder installEnvsCodes = new StringBuilder();
        if (installEnv != null) {
            for (String installenv : installEnv) {
                installEnvsCodes.append(InstallEnvType.toType(installenv).getCode());
            }
        }
        return installEnvsCodes.toString();
    }
}
