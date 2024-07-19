

package com.apitable.workspace.enums;

/**
 * <p>
 * view type.
 * </p>
 *
 * @author Benson Cheung
 */
public enum ViewType {

    NOT_SUPPORT(0),

    GRID(1),

    KANBAN(2),

    GALLERY(3),

    FORM(4),

    CALENDAR(5),
    GANTT(6);

    private int type;

    ViewType(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    /**
     * trans to ViewType enum.
     *
     * @param type type
     * @return ViewType
     */
    public static ViewType of(Integer type) {
        for (ViewType value : ViewType.values()) {
            if (value.getType() == type) {
                return value;
            }
        }
        return null;
    }
}
