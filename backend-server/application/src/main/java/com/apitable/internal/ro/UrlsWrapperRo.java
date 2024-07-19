

package com.apitable.internal.ro;

import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;

/**
 * url wrapper ro.
 *
 * @author tao
 */
@Data
public class UrlsWrapperRo {

    @Size(max = 100)
    private List<String> urls;

}
