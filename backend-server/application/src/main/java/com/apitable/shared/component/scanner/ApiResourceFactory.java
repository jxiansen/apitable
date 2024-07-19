

package com.apitable.shared.component.scanner;

import com.apitable.shared.component.ResourceDefinition;
import java.util.List;

/**
 * <p>
 * api resource factory.
 * </p>
 *
 * @author Shawn Deng
 */
public interface ApiResourceFactory {

    /**
     * register a resource into container.
     *
     * @param apiResource api resource
     */
    void registerDefinition(List<ResourceDefinition> apiResource);

    /**
     * get resource by url.
     *
     * @param resourceUrl url
     * @return ResourceDefinition
     */
    ResourceDefinition getResourceByUrl(String resourceUrl, String httpMethod);

    /**
     * clear resource.
     */
    void clear();
}
