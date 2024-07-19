

package com.apitable.internal.service;

import com.apitable.internal.vo.UrlAwareContentsVo;
import java.util.List;

/**
 * Field related functions.
 */
public interface IFieldService {

    /**
     * get the url information of the url.
     *
     * @param urls   url
     * @param userId User id
     * @return url information
     */
    UrlAwareContentsVo getUrlAwareContents(List<String> urls, Long userId);
}
