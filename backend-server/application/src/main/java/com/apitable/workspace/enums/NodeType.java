

package com.apitable.workspace.enums;

/**
 * node type.
 */
public enum NodeType {

    /**
     * root node.
     */
    ROOT(0),

    /**
     * folder.
     */
    FOLDER(1),

    /**
     * datasheet.
     */
    DATASHEET(2),

    /**
     * form.
     */
    FORM(3),

    /**
     * dashboard.
     */
    DASHBOARD(4),

    /**
     * mirror.
     */
    MIRROR(5),

    /**
     * dataPage, Page design based on.
     */
    DATAPAGE(6),

    /**
     * canvas.
     */
    CANVAS(7),

    /**
     * editor documents.
     */
    WORD_DOC(8),

    /**
     * ai chat bot.
     */
    AI_CHAT_BOT(9),

    /**
     * automation.
     */
    AUTOMATION(10),

    /**
     * airagent. NOTICE: Airagent will not create `node`, here is just for ID Generating
     */
    AIRAGENT(11),

    /**
     * custom page.
     */
    CUSTOM_PAGE(12),

    /**
     * static resource file.
     */
    ASSET_FILE(98),

    /**
     * dataDoc.
     */
    DATADOC(99);


    private final int value;

    NodeType(int value) {
        this.value = value;
    }

    public int getNodeType() {
        return value;
    }

    /**
     * transform from.
     *
     * @param code code value
     * @return NodeType
     */
    public static NodeType toEnum(int code) {
        for (NodeType e : NodeType.values()) {
            if (e.getNodeType() == code) {
                return e;
            }
        }
        throw new RuntimeException("unknown node type");
    }

    /**
     * whether is root node type.
     *
     * @return true if is root
     */
    public boolean isRoot() {
        return this == ROOT;
    }

    /**
     * whether is folder node type.
     *
     * @return true if is folder
     */
    public boolean isFolder() {
        return this == FOLDER;
    }

    /**
     * whether is not folder node type.
     *
     * @return true if is not folder
     */
    public boolean isNotFolder() {
        return !isRoot() && !isFolder();
    }
}
