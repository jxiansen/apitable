

package com.apitable.internal.vo;

import java.util.Map;
import lombok.Data;

/**
 * url aware contents vo.
 *
 * @author tao
 */
@Data
public class UrlAwareContentsVo {

    private Map<String, UrlAwareContentVo> contents;

}
