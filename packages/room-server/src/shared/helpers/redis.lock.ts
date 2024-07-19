

/* eslint-disable space-before-function-paren */
import { Redis } from 'ioredis';
import fs from 'fs';
import path from 'path';

const listLock = fs.readFileSync(path.resolve(__dirname, 'list.lock.lua'), 'utf8');

const DEFAULT_LOCK_TIMEOUT = 5000;

function acquireLock(client: Redis, lockNames: string[], timeout: number, retryDelay: number, onLockAcquired: (timedOut: boolean) => void) {
  function retry() {
    setTimeout(function() {
      acquireLock(client, lockNames, timeout, retryDelay, onLockAcquired);
    }, retryDelay);
  }

  const lockTimeoutValue = Date.now() + timeout + 1;
  // client.set(lockNames, lockTimeoutValue, 'PX', timeout, 'NX', function (err, result) {
  //   if (err || result === null) return retry();
  //   onLockAcquired(lockTimeoutValue);
  // });
  // set lockName as key
  const expireSecond = timeout > 1000 ? timeout / 1000 : timeout;
  (client.eval as any)(listLock, lockNames.length, ...lockNames, lockTimeoutValue, expireSecond, (err: any, result: any[]) => {
    if (err) {
      return console.error('Redis lock eval error. Error: ' + err);
    }
    if (!result[0]) {
      return retry();
    }
    onLockAcquired(lockTimeoutValue <= Date.now());
  });
}

export function RedisLock(client: Redis, retryDelay?: number) {
  if (!(client && client.setnx! && client.msetnx)) {
    throw new Error('You must specify a client instance of http://github.com/mranney/node_redis');
  }

  retryDelay = retryDelay || 50;

  function lock(lockName: string | string[], timeout: number = DEFAULT_LOCK_TIMEOUT): Promise<() => Promise<void>> {
    if (!lockName) {
      throw new Error('You must specify a lock string. It is on the redis key `lock.[string]` that the lock is acquired.');
    }

    const lockNamePrefix = 'lock.';
    if (Array.isArray(lockName)) {
      lockName = lockName.map(name => lockNamePrefix + name);
    } else {
      lockName = [lockNamePrefix + lockName];
    }

    return new Promise(resolve => {
      acquireLock(client, lockName as string[], timeout, retryDelay!, function(timedOut) {
        resolve(async () => {
          if (!timedOut) {
            // @ts-ignore
            await client.del(lockName);
          }
        });
      });
    });
  }

  return lock;
}
