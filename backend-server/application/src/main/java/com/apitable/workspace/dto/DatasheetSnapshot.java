

package com.apitable.workspace.dto;

import cn.hutool.json.JSONObject;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Snapshot for datasheet.
 */
@Setter
@Getter
public class DatasheetSnapshot {

    private Meta meta;

    /**
     * datasheet meta.
     */
    @Setter
    @Getter
    public static class Meta {

        private Map<String, Field> fieldMap;

        private List<View> views;

        /**
         * extract fields by field ids.
         *
         * @param fieldIds field ids
         * @return fields
         */
        public List<Field> extractFields(List<String> fieldIds) {
            return getFieldMap().values().stream()
                .filter(field -> fieldIds.contains(field.getId()))
                .collect(Collectors.toList());
        }
    }

    /**
     * field object.
     */
    @Setter
    @Getter
    @Builder(toBuilder = true)
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Field {

        private String id;

        private Integer type;

        private String name;

        private JSONObject property;
    }

    /**
     * view object.
     */
    @Setter
    @Getter
    public static class View {

        private String id;

        private String name;

        private List<Column> columns;

        private List<Row> rows;

        /**
         * extract field ids.
         *
         * @return field ids
         */
        public List<String> extractFieldIds() {
            return getColumns().stream()
                .filter(column -> !column.isHidden())
                .map(DatasheetSnapshot.Column::getFieldId)
                .collect(Collectors.toList());
        }
    }

    /**
     * column in view.
     */
    @Setter
    @Getter
    public static class Column {

        private String fieldId;

        private boolean hidden;
    }

    /**
     * row in view.
     */
    @Setter
    @Getter
    public static class Row {

        private String recordId;
    }
}
