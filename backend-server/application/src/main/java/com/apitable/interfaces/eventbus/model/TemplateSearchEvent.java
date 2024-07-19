

package com.apitable.interfaces.eventbus.model;

import com.apitable.shared.util.information.ClientOriginInfo;
import java.util.List;
import java.util.Set;

/**
 * Template search event.
 */
public class TemplateSearchEvent implements EventBusEvent {

    private final Long userId;

    private final String searchWord;

    private final List<String> albumNames;

    private final List<String> templateName;

    private final Set<String> tagName;

    private final ClientOriginInfo clientOriginInfo;

    /**
     * constructs.
     *
     * @param userId           user id
     * @param searchWord       search word
     * @param albumNames       album names
     * @param templateName     template name
     * @param tagName          tag name
     * @param clientOriginInfo client origin info
     */
    public TemplateSearchEvent(Long userId, String searchWord, List<String> albumNames,
                               List<String> templateName, Set<String> tagName,
                               ClientOriginInfo clientOriginInfo) {
        this.userId = userId;
        this.searchWord = searchWord;
        this.albumNames = albumNames;
        this.templateName = templateName;
        this.tagName = tagName;
        this.clientOriginInfo = clientOriginInfo;
    }

    @Override
    public EventBusEventType getEventType() {
        return EventBusEventType.TEMPLATE_SEARCH;
    }

    public Long getUserId() {
        return userId;
    }

    public String getSearchWord() {
        return searchWord;
    }

    public List<String> getAlbumNames() {
        return albumNames;
    }

    public List<String> getTemplateName() {
        return templateName;
    }

    public Set<String> getTagName() {
        return tagName;
    }

    public ClientOriginInfo getClientOriginInfo() {
        return clientOriginInfo;
    }
}
