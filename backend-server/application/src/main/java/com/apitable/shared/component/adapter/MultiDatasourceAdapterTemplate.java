

package com.apitable.shared.component.adapter;

import com.apitable.workspace.enums.NodeType;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * multi datasource adapter template.
 */
@Slf4j
@Component
public class MultiDatasourceAdapterTemplate {

    public List<String> getRecentlyVisitNodeIds(Long memberId, NodeType nodeType) {
        DatasourceAdapter adapter = this.getDatasourceAdapter();
        return adapter.getRecentlyVisitNodeIds(memberId, nodeType);
    }

    public void saveOrUpdateNodeVisitRecord(String spaceId, Long memberId, String nodeId,
                                            NodeType nodeType) {
        DatasourceAdapter adapter = this.getDatasourceAdapter();
        adapter.saveOrUpdateNodeVisitRecord(spaceId, memberId, nodeId, nodeType);
    }

    private DatasourceAdapter getDatasourceAdapter() {
        return new MysqlAdapter();
    }

}
