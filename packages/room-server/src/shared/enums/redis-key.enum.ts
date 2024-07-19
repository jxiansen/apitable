export enum UserRoom {
  PREFIX = 'cache:online:room:',
  // 3 days
  EXPIRE = 259200,
}

export enum SocketCache {
  PREFIX = 'cache:socket:',
  // 30 days
  EXPIRE = 2592000,
}

/**
 * Nest Server Cache Key
 */
export enum NestCacheKeys {
  SOCKET = 'nest:socket:%s',
  RESOURCE_RELATE = 'nest:resource:%s',
}
