
import process from 'process';
// import { IDENTIFY_CODE_LOGIN } from './constant';
export function isPrivateDeployment() {
  return Boolean(process.env.REACT_APP_DEPLOYMENT_MODELS === 'PRIVATE');
}

export function isIdassPrivateDeployment() {
  return getCustomConfig().isIdaas && isPrivateDeployment();
}

declare let window: any;

export function getCustomConfig() {
  // There is a bug here. Import IDENTIFY_CODE_LOGIN cannot be used.
  return typeof window === 'object' && window.__initialization_data__.envVars || {
    LOGIN_DEFAULT_VERIFY_TYPE: 'identify_code_login',
    VIEW_NAME_MAX_COUNT: process.env.VIEW_NAME_MAX_COUNT || 30
  };
}
