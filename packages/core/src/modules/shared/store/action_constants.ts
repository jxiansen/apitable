

export const SET_ROBOT_PANEL_STATUS = 'SET_ROBOT_PANEL_STATUS';
export const SET_COPILOT_PANEL_STATUS = 'SET_COPILOT_PANEL_STATUS';
export const SET_NEW_RECORD_EXPECT_INDEX = 'SET_NEW_RECORD_EXPECT_INDEX';
export const CLEAR_ACTIVE_ROW_INFO = 'CLEAR_ACTIVE_ROW_INFO';
export const SET_ACTIVE_ROW_INFO = 'SET_ACTIVE_ROW_INFO';
export const REFRESH_SNAPSHOT = 'REFRESH_SNAPSHOT';
export const APPLY_OPERATION = 'APPLY_OPERATION';
export const SWITCH_CARD_EDITOR = 'SWITCH_CARD_EDITOR';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const SWITCH_VIEW = 'SWITCH_VIEW';
export const DATAPACK_LOADED = 'DATAPACK_LOADED';
export const CACHE_TEMPORARY_VIEW = 'CACHE_TEMPORARY_VIEW';
export const ACTIVE_OPERATE_VIEW_ID = 'ACTIVE_OPERATE_VIEW_ID';
export const RESET_OPERATE_VIEW_ID = 'RESET_OPERATE_VIEW_ID';
export const ACTIVE_EXPORT_VIEW_ID = 'ACTIVE_EXPORT_VIEW_ID';
export const RESET_EXPORT_VIEW_ID = 'RESET_EXPORT_VIEW_ID';

export const DATAPACK_REQUEST = 'DATAPACK_REQUEST';

export const SEND_USERCHANGE = 'SEND_USERCHANGE';
export const SEND_USERCHANGE_ACK = 'SEND_USERCHANGE_ACK';
export const SEND_USERCHANGE_REJECT = 'SEND_USERCHANGE_REJECT';
export const DATASHEET_ACTIVE_COLLABORATOR = 'DATASHEET_ACTIVE_COLLABORATOR';
export const DASHBOARD_ACTIVE_COLLABORATOR = 'DASHBOARD_ACTIVE_COLLABORATOR';
export const MIRROR_ACTIVE_COLLABORATOR = 'MIRROR_ACTIVE_COLLABORATOR';
export const SET_HIGHLIGHT_FIELD_ID = 'SET_HIGHLIGHT_FIELD_ID';

export const CURSOR_MOVE = 'CURSOR_MOVE';
export const DATASHEET_DEACTIVATE_COLLABORATOR = 'DATASHEET_DEACTIVATE_COLLABORATOR';
export const DASHBOARD_DEACTIVATE_COLLABORATOR = 'DASHBOARD_DEACTIVATE_COLLABORATOR';
export const MIRROR_DEACTIVATE_COLLABORATOR = 'MIRROR_DEACTIVATE_COLLABORATOR';

export const RESET_DATASHEET = 'RESET_DATASHEET';
export const ADD_DATASHEET = 'ADD_DATASHEET';

export const SET_LOADING_RECORD = 'SET_LOADING_RECORD';
export const GET_SELECTION = 'GET_SELECTION';
export const SET_SELECTION = 'SET_SELECTION';
export const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL';
export const SET_RECORD_SELECTION = 'SET_RECORD_SELECTION';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const CLEAR_SELECTION_BUT_KEEP_CHECKED_RECORD = 'CLEAR_SELECTION_BUT_KEEP_CHECKED_RECORD';
export const SET_FIELD_RANGES = 'SET_FIELD_RANGES';
export const SET_FILL_HANDLE_STATUS = 'SET_FILL_HANDLE_STATUS';
export const SET_ROOT_ID = 'SET_ROOT_ID';
export const UPDATE_TEAM_LIST = 'UPDATE_TEAM_LIST';
export const UPDATE_SELECTED_TEAM_INFO = 'UPDATE_SELECTED_TEAM_INFO';
export const UPDATE_MEMBER_LIST = 'UPDATE_MEMBER_LIST';
export const UPDATE_MEMBER_INFO = 'UPDATE_MEMBER_INFO';
export const UPDATE_TEAM_LIST_IN_SPACE = 'UPDATE_TEAM_LIST_IN_SPACE';
export const UPDATE_INVITED_STATUS = 'UPDATE_INVITED_STATUS';
export const UPDATE_SELECTED_TEAM_INFO_IN_SPACE = 'UPDATE_SELECTED_TEAM_INFO_IN_SPACE';
export const UPDATE_RIGHT_CLICK_TEAM_INFO_IN_SPACE = 'UPDATE_RIGHT_CLICK_TEAM_INFO_IN_SPACE';
export const UPDATE_MEMBER_LIST_IN_SPACE = 'UPDATE_MEMBER_LIST_IN_SPACE';
export const UPDATE_MEMBER_INFO_IN_SPACE = 'UPDATE_MEMBER_INFO_IN_SPACE';
export const UPDATE_SELECTED_ROWS_IN_SPACE = 'UPDATE_SELECTED_ROWS_IN_SPACE';
export const UPDATE_SELECT_MEMBER_LIST_IN_SPACE = 'UPDATE_SELECT_MEMBER_LIST_IN_SPACE';
export const UPDATE_SUB_TEAM_LIST_IN_SPACE = 'UPDATE_SUB_TEAM_LIST_IN_SPACE';
export const UPDATE_SELECTED_TEAM_KEYS = 'UPDATE_SELECTED_TEAM_KEYS';
export const UPDATE_SELECTED_TEAM_ROWS = 'UPDATE_SELECTED_TEAM_ROWS';
export const UPDATE_SUB_ADMIN_LIST_DATA = 'UPDATE_SUB_ADMIN_LIST_DATA';
export const UPDATE_PERMISSION_LIST = 'UPDATE_PERMISSION_LIST';
export const UPDATE_ADDRESS_TREE = 'UPDATE_ADDRESS_TREE';
export const UPDATE_MEMBER_LIST_PAGE_NO = 'UPDATE_MEMBER_LIST_PAGE_NO';
export const UPDATE_MEMBER_LIST_TOTAL = 'UPDATE_MEMBER_LIST_TOTAL';
export const UPDATE_MEMBER_LIST_LOADING = 'UPDATE_MEMBER_LIST_LOADING';
export const UPDATE_MEMBER_LIST_PAGE = 'UPDATE_MEMBER_LIST_PAGE';
/**
 * update main admin info
 */
export const UPDATE_MAIN_ADMIN_INFO = 'UPDATE_MAIN_ADMIN_INFO';
export const SET_RECONNECTING = 'SET_RECONNECTING';
export const SET_CONNECTED = 'SET_CONNECTED';
export const UPDATE_DATASHEET_NAME = 'UPDATE_DATASHEET_NAME';
export const UPDATE_SINGLE_MEMBER_IN_MEMBERLIST = 'UPDATE_SINGLE_MEMBER_IN_MEMBERLIST';
export const UPDATE_USERINFO_ERR = 'UPDATE_USERINFO_ERR';
export const ADD_WIZARD_NUMBER = 'ADD_WIZARD_NUMBER';
export const SET_GRID_VIEW_HOVER_FIELD_ID = 'SET_GRID_VIEW_HOVER_FIELD_ID';

// billing
export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION';
// invite
export const UPDATE_TEAM_TREE_INVITE = 'UPDATE_TEAM_TREE_INVITE';
export const UPDATE_SUB_TEAM_TREE_INVITE = 'UPDATE_SUB_TEAM_TREE_INVITE';
export const UPDATE_INVITE_LINK_INFO = 'UPDATE_INVITE_LINK_INFO';
export const UPDATE_LINK_TOKEN = 'UPDATE_LINK_TOKEN';
export const UPDATE_MAIL_TOKEN = 'UPDATE_MAIL_TOKEN';
export const UPDATE_INVITE_ERR_CODE = 'UPDATE_INVITE_ERR_CODE';

/**
 * permission related
 */
export const UPDATE_SPACE_RESOURCE = 'UPDATE_SPACE_RESOURCE';
export const SET_PERMISSION_COMMIT_REMIND_STATUS = 'SET_PERMISSION_COMMIT_REMIND_STATUS';
export const SET_PERMISSION_COMMIT_REMIND_PARAMETER = 'SET_PERMISSION__COMMIT_REMIND_PARAMETER';
export const SET_NO_PERMISSION_MEMBERS = 'SET_NO_PERMISSION_MEMBERS';

/**
 * invite email
 */
export const UPDATE_INVITE_EMAIL_INFO = 'UPDATE_INVITE_EMAIL_INFO';
export const UPDATE_INVITE_ERR = 'UPDATE_INVITE_ERR';

/**
 * notification center
 */
export const UPDATE_UNREAD_MSG_COUNT = 'UPDATE_UNREAD_MSG_COUNT';
export const UPDATE_READ_MSG_COUNT = 'UPDATE_READ_MSG_COUNT';
export const UPDATE_READ_NOTICE_LIST = 'ADD_READ_NOTICE_LIST';
export const UPDATE_UNREAD_NOTICE_LIST = 'ADD_UNREAD_NOTICE_LIST';
export const DEL_UNREAD_NOTICE_LIST = 'DEL_UNREAD_NOTICE_LIST';
export const UPDATE_NEW_NOTICE_LIST_FROM_WS = 'UPDATE_NEW_NOTICE_LIST_FROM_WS';
export const GET_NEW_MSG_FROM_WS_AND_LOOK = 'GET_NEW_MSG_FROM_WS_AND_LOOK';

/**
 * mouse scrolling position
 */
export const SCROLL_OFFSET = 'SCROLL_OFFSET';
export const SET_NODE_NAME = 'SET_NODE_NAME';

/**
 * if the sub-node request failed
 */
export const SET_NODE_ERROR_TYPE = 'SET_NODE_ERROR_TYPE';

/**
 * update the view
 */
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const SET_DEL_NODE_ID = 'SET_DEL_NODE_ID';
export const DELETE_NODE = 'DELETE_NODE';
export const MOVE_NODE_TO_FOLDER = 'MOVE_NODE_TO_FOLDER';
export const CO_LAYER_MOVE_NODE = 'CO_LAYER_MOVE_NODE';
export const SET_OPT_NODE = 'SET_OPT_NODE';
export const SET_ERR = 'SET_ERR';
export const SET_EDIT_NODE_ID = 'SET_EDIT_NODE_ID';
export const ADD_TASK = 'ADD_TASK';
export const ADD_NODE_TO_MAP = 'ADD_NODE_TO_MAP';
export const CLEAR_TASK_QUEUE = 'CLEAR_TASK_QUEUE';
export const SET_ACTIVE_DST_ID = 'SET_ACTIVE_DST_ID';
export const SET_IS_COPY_ALL = 'SET_IS_COPY_ALL';
export const INIT_CATALOG_TREE = 'INIT_CATALOG_TREE';
export const UPDATE_LINK_LIST = 'UPDATE_LINK_LIST';

// catalog
export const SET_COPY_NODE_ID = 'SET_COPY_NODE_ID';
export const SET_ALL_VISIBLE = 'SET_ALL_VISIBLE';
export const TREE_LOADING = 'TREE_LOADING';
export const SET_ACTIVE_TREE_TYPE = 'SET_ACTIVE_TREE_TYPE';
export const UPDATE_HAS_CHILDREN = 'UPDATE_HAS_CHILDREN';
export const NODE_MOVE_TO = 'NODE_MOVE_TO';
export const UPDATE_TREE_NODES_MAP = 'UPDATE_TREE_NODES_MAP';
export const CLEAR_NODE = 'CLEAR_NODE';
export const SET_NICKNAME = 'SET_NICKNAME';
export const UPDATE_USERINFO = 'UPDATE_USERINFO';
export const REMOVE_NODE_FROM_MAP = 'REMOVE_NODE_FROM_MAP';
export const REMOVE_NODE_FROM_TREE = 'REMOVE_NODE_FROM_TREE';
export const UPDATE_IS_PERMISSION = 'UPDATE_IS_PERMISSION';
export const UPDATE_SOCKET_DATA = 'UPDATE_SOCKET_DATA';
export const REFRESH_TREE = 'REFRESH_TREE';
export const SET_ACTIVE_NODE_ERROR = 'SET_ACTIVE_NODE_ERROR';
export const SET_TREE_ROOT_ID = 'SET_TREE_ROOT_ID';
export const SET_PRIVATE_TREE_ROOT_ID = 'SET_PRIVATE_TREE_ROOT_ID';

export const ADD_NODE_TO_FAVORITE_LIST = 'ADD_NODE_TO_FAVORITE_LIST';
export const REMOVE_FAVORITE_NODE = 'REMOVE_FAVORITE_NODE';
export const SET_FAVORITE_EXPANDED_KEYS = 'SET_FAVORITE_EXPANDED_KEYS';
export const SET_FAVORITE_EDIT_NODE_ID = 'SET_FAVORITE_EDIT_NODE_ID';
export const SET_FAVORITE_DEL_NODE_ID = 'SET_FAVORITE_DEL_NODE_ID';
export const SET_FAVORITE_LOADING = 'SET_FAVORITE_LOADING';
export const DELETE_NODE_FROM_FAVORITE_LIST = 'DELETE_NODE_FROM_FAVORITE_LIST';
export const MOVE_FAVORITE_NODE = 'MOVE_FAVORITE_NODE';
export const INIT_FAVORITE_TREE_NODES = 'INIT_FAVORITE_TREE_NODES';
export const UPDATE_PERMISSION_MODAL_NODE_ID = 'UPDATE_PERMISSION_MODAL_NODE_ID';
export const UPDATE_SHARE_MODAL_NODE_ID = 'UPDATE_SHARE_MODAL_NODE_ID';
export const UPDATE_SAVE_AS_TEMPLATE_MODAL_NODE_ID = 'UPDATE_SAVE_AS_TEMPLATE_MODAL_NODE_ID';
export const UPDATE_IMPORT_MODAL_NODE_ID = 'UPDATE_IMPORT_MODAL_NODE_ID';
export const SET_LOADED_KEYS = 'SET_LOADED_KEYS';
export const UPDATE_MOVE_TO_NODE_IDS = 'UPDATE_MOVE_TO_NODE_IDS';

// tabBar
export const ADD_TAB_ITEM = 'ADD_TAB_ITEM';
export const REMOVE_TAB_ITEM = 'REMOVE_TAB_ITEM';
export const MOVE_TAB_ITEM = 'MOVE_TAB_ITEM';
export const RENAME_TAB_ITEM = 'RENAME_TAB_ITEM';
export const COPY_TAB_ITEM = 'COPY_TAB_ITEM';
export const SET_TAB_ITEM_TO_INDEX = 'SET_TAB_ITEM_TO_INDEX';
export const SET_EDIT_INDEX = 'SET_EDIT_INDEX';
export const SET_DRAG_NODE_ID = 'SET_DRAG_NODE_ID';
export const INIT_TAB_BAR_INFO = 'INIT_TAB_BAR_INFO';
export const INIT_TAB_BAR = 'INIT_TAB_BAR';
export const SET_EXPANDED_KEYS = 'SET_EXPANDED_KEYS';
export const TOGGLE_API_PANEL = 'TOGGLE_API_PANEL';
export const TOGGLE_SIDE_RECORD_PANEL = 'TOGGLE_SIDE_RECORD_PANEL';
export const TOGGLE_RECORD_PANEL_FULL_SCREEN = 'TOGGLE_RECORD_PANEL_FULL_SCREEN';

// user
export const SET_USER_ME = 'SET_USER_ME';
export const SET_IS_LOGIN = 'SET_IS_LOGIN';
export const SET_HOME_ERR = 'SET_HOME_ERR';
export const SET_REGISTER_STATUS = 'SET_REGISTER_STATUS';
export const SET_USED_INVITE_REWARD = 'SET_USED_INVITE_REWARD';
export const SET_IS_CODE = 'SET_IS_CODE';
export const SET_IS_CREATE_SPACE = 'SET_IS_CREATE_SPACE';
export const SET_LOADING = 'SET_LOADING';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_USER_AVATAR = 'SET_USER_AVATAR';
export const SET_USER_AVATAR_COLOR = 'SET_USER_AVATAR_COLOR';
export const SET_USER_TIMEZONE = 'SET_USER_TIMEZONE';
export const SET_REQ_STATUS = 'SET_REQ_STATUS';
export const SET_HTTP_ERR_INFO = 'SET_HTTP_ERR_INFO';
export const SET_ACTIVE_RECORD_ID = 'SET_ACTIVE_RECORD_ID';
export const SET_PWD = 'SET_PWD';
/**
 * current row record that can be drag
 */
export const SET_DRAG_TARGET = 'SET_DRAG_TARGET';

/**
 * set drag move target
 */
export const SET_DRAG_MOVE = 'SET_DRAG_MOVE';

/**
 * set current mouse hover state
 */
export const SET_HOVER_RECORD_ID = 'SET_HOVER_RECORD_ID';
export const UPDATE_SOCIAL_CONFIG = 'UPDATE_SOCIAL_CONFIG';
// page params
export const SET_PAGE_PARAMS = 'SET_PAGE_PARAMS';

export const SET_ACTIVE_FIELD_STATE = 'SET_ACTIVE_FIELD_STATE';
export const SET_TEMP_SELECTION = 'SET_TEMP_SELECTION';

// space
export const SET_SPACE_LIST = 'SET_SPACE_LIST';
export const SET_QUIT_SPACE_ID = 'SET_QUIT_SPACE_ID';
export const SET_SPACE_ERR = 'SET_SPACE_ERR';
export const SET_SPACE_LOADING = 'SET_SPACE_LOADING';
export const SET_SPACE_INFO = 'SET_SPACE_INFO';
export const SET_SPACE_FEATURES = 'SET_SPACE_FEATURES';
export const SET_SHORTCUT_KEY_PANEL_VISIBLE = 'SET_SHORTCUT_KEY_PANEL_VISIBLE';
export const SET_MARKETPLACE_APPS = 'SET_MARKETPLACE_APPS';
export const SET_ACTIVE_SPACE_ID = 'SET_ACTIVE_SPACE_ID';
export const SET_ENVS = 'SET_ENVS';

export const SET_CHANGE_COLUMNS_WIDTH = 'SET_CHANGE_COLUMNS_WIDTH';

/**
 * the collapse of grouping
 */
export const SET_GROUPING_COLLAPSE = 'SET_GROUPING_COLLAPSE';

/**
 * the collapse of kanban(board view)
 */
export const SET_KANBAN_GROUPING_EXPAND = 'SET_KANBAN_GROUPING_EXPAND';

/**
 * control kanban view setting menu's collapse
 */
export const TOGGLE_KANBAN_GROUP_SETTING_VISIBLE = 'TOGGLE_KANBAN_GROUP_SETTING_VISIBLE';

// Gantt View

/**
 * Gantt View left side panel hide/show
 */
export const TOGGLE_GANTT_GRID = 'TOGGLE_GANTT_GRID';

/**
 * Gantt View left side task panel width
 */
export const SET_GANTT_GRID_WIDTH = 'SET_GANTT_GRID_WIDTH';

/**
 * Gantt View right side setting panel hide/show
 */
export const TOGGLE_GANTT_SETTING_PANEL = 'TOGGLE_GANTT_SETTING_PANEL';

/**
 * Gantt View right side setting panel width
 */
export const SET_GANTT_SETTING_PANEL_WIDTH = 'SET_GANTT_SETTING_PANEL_WIDTH';

/**
 * Gantt View's time unit type
 */
export const SET_GANTT_DATE_UNIT_TYPE = 'SET_GANTT_DATE_UNIT_TYPE';

// Calendar View
export const TOGGLE_CALENDAR_GUIDE_STATUS = 'TOGGLE_CALENDAR_GUIDE_STATUS';
export const TOGGLE_CALENDAR_GRID = 'TOGGLE_CALENDAR_GRID';
export const SET_CALENDAR_GRID_WIDTH = 'SET_CALENDAR_GRID_WIDTH';
export const TOGGLE_CALENDAR_SETTING_PANEL = 'TOGGLE_CALENDAR_SETTING_PANEL';
export const SET_CALENDAR_SETTING_PANEL_WIDTH = 'SET_CALENDAR_SETTING_PANEL_WIDTH';

// OrgChart View
export const TOGGLE_ORG_CHART_GUIDE_STATUS = 'TOGGLE_ORG_CHART_GUIDE_STATUS';
export const TOGGLE_ORG_CHART_GRID = 'TOGGLE_ORG_CHART_GRID';
export const SET_ORG_CHART_GRID_WIDTH = 'SET_ORG_CHART_GRID_WIDTH';
export const TOGGLE_ORG_CHART_SETTING_PANEL = 'TOGGLE_ORG_CHART_SETTING_PANEL';
export const SET_ORG_CHART_SETTING_PANEL_WIDTH = 'SET_ORG_CHART_SETTING_PANEL_WIDTH';

/**
 * the state of edit
 */
export const SET_EDIT_STATUS = 'SET_EDIT_STATUS';

/**
 * write it down, the modified node description
 */
export const RECORD_NODE_DESC = 'RECORD_NODE_DESC';

export const SET_SHARE_MEMBER_ID = 'SET_SHARE_MEMBER_ID';

export const RECORD_NODE_SHARED = 'RECORD_NODE_SHARED';

export const SET_SCREEN_WIDTH = 'SET_SCREEN_WIDTH';
export const SET_SIDEBAR_VISIBLE = 'SET_SIDEBAR_VISIBLE';
export const SET_NODE_ICON = 'SET_NODE_ICON';
export const CLEAR_FIELD_INFO = 'CLEAR_FIELD_INFO';

// hook
export const UPDATE_PENDING_GUIDE_WIZARD_IDS = 'UPDATE_PENDING_GUIDE_WIZARD_IDS';
export const UPDATE_CURRENT_GUIDE_STEP_IDS = 'UPDATE_CURRENT_GUIDE_STEP_IDS';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const UPDATE_TRIGGERED_GUIDE_INFO = 'UPDATE_TRIGGERED_GUIDE_INFO';
export const INIT_HOOKS_DATA = 'INIT_HOOKS_DATA';
export const UPDATE_CURRENT_GUIDE_WIZARD_ID = 'UPDATE_CURRENT_GUIDE_WIZARD_ID';
export const CLEAR_WIZARDS_DATA = 'CLEAR_WIZARDS_DATA';
// toolbar
export const SET_TOOLBAR_MENU_CARD_OPEN = 'SET_TOOLBAR_MENU_CARD_OPEN';

// rightPane
export const SET_RIGHT_PANE_WIDTH = 'SET_RIGHT_PANE_WIDTH';

export const UPDATE_UNIT_MAP = 'UPDATE_UNIT_MAP';
export const UPDATE_USER_MAP = 'UPDATE_USER_MAP';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const RESET_UNIT_INFO = 'RESET_UNIT_INFO';
export const SET_SEARCH_RESULT_CURSOR_INDEX = 'SET_SEARCH_RESULT_CURSOR_INDEX';

export const SET_HOVER_GROUP_PATH = 'SET_HOVER_GROUP_PATH';

export const SET_HOVER_ROW_OF_ADD_RECORD = 'SET_HOVER_ROW_OF_ADD_RECORD';
export const TOGGLE_TIME_MACHINE_PANEL = 'TOGGLE_TIME_MACHINE_PANEL';
export const TOGGLE_ARCHIVED_RECORDS_PANEL = 'TOGGLE_ARCHIVED_RECORDS_PANEL';

// Form
export const FORM_JOT_ACTION = 'FORM_JOT_ACTION';
export const FORM_REQUEST = 'FORM_REQUEST';
export const FORM_LOADED = 'FORM_LOADED';
export const FORM_CONNECTED = 'FORM_CONNECTED';

export const FORM_PROP_UPDATE = 'FORM_PROP_UPDATE';
export const UPDATE_FORM = 'UPDATE_FORM';
export const FORM_ROOM_INFO_SYNC = 'FORM_ROOM_INFO_SYNC';
export const SET_FORM_CLIENT = 'SET_FORM_CLIENT';
export const SET_FORM_LOADING = 'SET_FORM_LOADING';
export const SET_FORM_DATA = 'SET_FORM_DATA';
export const SET_FORM_SYNCING = 'SET_FORM_SYNCING';
export const UPDATE_FORM_NAME = 'UPDATE_FORM_NAME';
export const FORM_DEACTIVATE_COLLABORATOR = 'FORM_DEACTIVATE_COLLABORATOR';
export const FORM_ACTIVE_COLLABORATOR = 'FORM_ACTIVE_COLLABORATOR';
export const RESET_FORM = 'RESET_FORM';

export const SET_RECORD_VISION_MODE = 'SET_RECORD_VISION_MODE';
export const SET_THEME = 'SET_THEME';

// resource
export const RESOURCE_CONNECTED = 'RESOURCE_CONNECTED';
export const CHANGE_RESOURCE_SYNCING_STATUS = 'CHANGE_RESOURCE_SYNCING_STATUS';
export const UPDATE_FORM_UNIT_MAP = 'UPDATE_FORM_UNIT_MAP';
// globalState
export const SET_RIGHT_CLICK_INFO = 'SET_RIGHT_CLICK_INFO';

// Widget Panel
export const TOGGLE_WIDGET_PANEL = 'TOGGLE_WIDGET_PANEL';
export const CHANGE_WIDGET_PANEL_WIDTH = 'CHANGE_WIDGET_PANEL_WIDTH';
export const SWITCH_ACTIVE_PANEL = 'SWITCH_ACTIVE_PANEL';
export const SET_WIDGET_PANEL_LOADING = 'SET_WIDGET_PANEL_LOADING';

// Widget
export const RECEIVE_INSTALLATIONS_WIDGET = 'RECEIVE_INSTALLATIONS_WIDGET';
export const RESET_WIDGET = 'RESET_WIDGET';

// Dashboard
export const SET_DASHBOARD_LOADING = 'SET_DASHBOARD_LOADING';
export const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';
export const SET_DASHBOARD_CLIENT = 'SET_DASHBOARD_CLIENT';
export const RESET_DASHBOARD = 'RESET_DASHBOARD';
export const UPDATE_DASHBOARD_NAME = 'UPDATE_DASHBOARD_NAME';
export const UPDATE_DASHBOARD_INFO = 'UPDATE_DASHBOARD_INFO';

// Mirror
export const SET_MIRROR_LOADING = 'SET_MIRROR_LOADING';
export const SET_MIRROR_DATA = 'SET_MIRROR_DATA';
export const SET_MIRROR_CLIENT = 'SET_MIRROR_CLIENT';
export const RESET_MIRROR = 'RESET_MIRROR';
export const UPDATE_MIRROR_NAME = 'UPDATE_MIRROR_NAME';
export const UPDATE_MIRROR_INFO = 'UPDATE_MIRROR_INFO';
export const MIRROR_JOT_ACTION = 'MIRROR_JOT_ACTION';

// RESOURCE JOT_ACTION
export const DATASHEET_JOT_ACTION = 'DATASHEET_JOT_ACTION';
export const DASHBOARD_JOT_ACTION = 'DASHBOARD_JOT_ACTION';
export const WIDGET_JOT_ACTION = 'WIDGET_JOT_ACTION';

// RESOURCE UPDATE_REVISION
export const MIRROR_UPDATE_REVISION = 'MIRROR_UPDATE_REVISION';
export const DATASHEET_UPDATE_REVISION = 'DATASHEET_UPDATE_REVISION';
export const DASHBOARD_UPDATE_REVISION = 'DASHBOARD_UPDATE_REVISION';
export const WIDGET_UPDATE_REVISION = 'WIDGET_UPDATE_REVISION';
export const FORM_UPDATE_REVISION = 'FORM_UPDATE_REVISION';

// RESOURCE CONNECTING
export const DATASHEET_CONNECTED = 'DATASHEET_CONNECTED';
export const DASHBOARD_CONNECTED = 'DASHBOARD_CONNECTED';
export const MIRROR_CONNECTED = 'MIRROR_CONNECTED';

// RESOURCE SYNC
export const SET_DATASHEET_SYNCING = 'SET_DATASHEET_SYNCING';
export const SET_DASHBOARD_SYNCING = 'SET_DASHBOARD_SYNCING';
export const SET_MIRROR_SYNCING = 'SET_MIRROR_SYNCING';

// RESOURCE ROOM_INFO
export const DATASHEET_ROOM_INFO_SYNC = 'DATASHEET_ROOM_INFO_SYNC';
export const DASHBOARD_ROOM_INFO_SYNC = 'DASHBOARD_ROOM_INFO_SYNC';
export const MIRROR_ROOM_INFO_SYNC = 'MIRROR_ROOM_INFO_SYNC';

// RESOURCE ERR CODE
export const FORM_ERROR_CODE = 'FORM_ERROR_CODE';
export const DATASHEET_ERROR_CODE = 'DATASHEET_ERROR_CODE';
export const DASHBOARD_ERROR_CODE = 'DASHBOARD_ERROR_CODE';
export const MIRROR_ERROR_CODE = 'MIRROR_ERROR_CODE';

// RESOURCE UPDATE
export const UPDATE_DATASHEET = 'UPDATE_DATASHEET';
export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';
export const UPDATE_MIRROR = 'UPDATE_MIRROR';

export const UPDATE_SNAPSHOT = 'UPDATE_SNAPSHOT';

// EXPAND RECORD

export const EXPAND_STATUS = 'EXPAND_STATUS';
// template
export const UPDATE_TEMPLATE_CATEGORY = 'UPDATE_TEMPLATE_CATEGORY';
export const UPDATE_TEMPLATE_DIRECTORY = 'UPDATE_TEMPLATE_DIRECTORY';

// share

export const SET_SHARE_INFO = 'SET_SHARE_INFO';

// preview
export const SET_PREVIEW_MODAL_VISIBLE = 'SET_PREVIEW_MODAL_VISIBLE';

// fieldPermissionMap
export const UPDATE_FIELD_PERMISSION_MAP = 'UPDATE_FIELD_PERMISSION_MAP';
export const RESET_FIELD_PERMISSION_MAP = 'RESET_FIELD_PERMISSION_MAP';
export const LOAD_FIELD_PERMISSION_MAP = 'LOAD_FIELD_PERMISSION_MAP';
export const UPDATE_FIELD_PERMISSION_SETTING = 'UPDATE_FIELD_PERMISSION_SETTING';

// browser worker computed datasheet cached data.
export const UPDATE_DATASHEET_COMPUTED = 'UPDATE_DATASHEET_COMPUTED';
export const SET_DATASHEET_COMPUTED = 'SET_DATASHEET_COMPUTED';
export const UPDATE_DATASHEET_COMPUTED_ROWS = 'UPDATE_DATASHEET_COMPUTED_ROWS';
export const UPDATE_DATASHEET_COMPUTED_COLUMNS = 'UPDATE_DATASHEET_COMPUTED_COLUMNS';
export const SET_DATASHEET_COMPUTED_STATUS = 'SET_DATASHEET_COMPUTED_STATUS';

export const SET_CLOSE_SYNC_VIEW_ID = 'SET_CLOSE_SYNC_VIEW_ID';

/**
 * Labs Features
 */
export const SET_LABS = 'SET_LABS';

/**
 * Data subscribe(follow) features
 */
export const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';

/**
 * Preview file
 */
export const SET_PREVIEW_FILE = 'SET_PREVIEW_FILE';
export const SET_PREVIEW_FILE_CELL_ACTIVE = 'SET_PREVIEW_FILE_CELL_ACTIVE';
export const SET_PREVIEW_DEFAULT_ACTIVE = 'SET_PREVIEW_DEFAULT_ACTIVE';

/**
 * View derivation
 */
export const SET_VIEW_DERIVATION = 'SET_VIEW_DERIVATION'; // Update view derivation
export const DELETE_VIEW_DERIVATION = 'DELETE_VIEW_DERIVATION'; // Delete
export const PATCH_VIEW_DERIVATION = 'PATCH_VIEW_DERIVATION'; // Update part of the view derivation.
export const TRIGGER_VIEW_DERIVATION_COMPUTED = 'TRIGGER_VIEW_DERIVATION_COMPUTED'; // Calculating view-derived data triggers action

/**
 * Set view property
 */
export const SET_VIEW_PROPERTY = 'SET_VIEW_PROPERTY';
