

// ================ Account ======================

/**
 * Get My Info (me)
 */
export const USER_ME = '/user/me';

/**
  * Check if the user can close or delete
  */
export const USER_CAN_LOGOUT = '/user/checkForClosing';
 
/**
  * Validate phone number and check if it has been registered
  */
export const USER_VALIDATE = '/user/validate';
 
/**
  * Space - check if the user's email is the same as the specified email
  */
export const EMAIL_VALIDATE = '/user/validate/email';
 
/**
  * Space - binding the invited email
  */
export const LINK_INVITE_EMAIL = '/user/link/inviteEmail';
 
/**
  * Space - check if the user has bound the email
  */
export const EMAIL_BIND = '/user/email/bind';
 
/**
  * Update (Edit) the user info
  */
export const UPDATE_USER = '/user/update';
 
/**
  * Change password
  */
export const UPDATE_PWD = '/user/updatePwd';
 
/**
  * Getting back the password
  */
export const RETRIEVE_PWD = '/user/retrievePwd';
 
/**
  * Create developer access token
  */
export const CREATE_API_KEY = '/user/createApiKey';
 
/**
  * Refresh developer access token
  */
export const REFRESH_API_KEY = '/user/refreshApiKey';
 
/**
  * Bind Email
  */
export const BIND_EMAIL = '/user/bindEmail';
 
/**
  * Bind phone number
  */
export const BIND_MOBILE = '/user/bindPhone';
 
/**
  * UnBind 3rd social account
  */
export const UN_BIND = '/user/unbind';
 
/**
  * Get user's points/credit
  */
export const USER_CREDIT = '/user/integral';
 
/**
  * query user's points/credit with with pagination
  */
export const USER_INTEGRAL_RECORDS = '/user/integral/records';
 
/**
  * Unbind phone number
  */
export const USER_UNBIND_MOBILE = '/user/unbindPhone';
 
/**
  * Unbind email
  */
export const USER_UNBIND_EMAIL = '/user/unbindEmail';
 
/**
  * invite code reward
  */
export const INVITE_CODE_REWARD = '/user/invite/reward';

// ================ User Authentication ====================

// Close user, delete user
export const CLOSE_USER = '/user/applyForClosing';

// cancel delete user
export const CANCEL_CLOSE_USER = '/user/cancelClosing';

