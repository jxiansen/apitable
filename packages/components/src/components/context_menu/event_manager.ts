import { IMenuConfig, IMenuEventHandler } from './interface';

function eventManager() {
  const map = new Map<string, IMenuEventHandler>();

  return {
    off: (id: string) => {
      map.delete(id);
    },
    on: (id: string, handler: IMenuEventHandler) => {
      map.set(id, handler);
    },
    emit: (id: string, configs?: IMenuConfig) => {
      const handler = map.get(id);
      if (handler) {
        handler(configs);
      }
    },
  };
}

export const manager = eventManager();
