import { IEventInstance, IOPEvent } from '@apitable/core';
import { IOtEventContext } from 'database/ot/interfaces/ot.interface';

export interface IEventExecutor {
  // execute events
  execute(events: IEventInstance<IOPEvent>[], context?: IOtEventContext): void;
}

export class OTEventManager {
  private static executors = new Map<string, IEventExecutor>();

  public static addExecutor<T extends IEventExecutor>(name: string, executor: T) {
    this.executors.set(name, executor);
  }

  public static async execute(events: IEventInstance<IOPEvent>[], context?: IOtEventContext) {
    await Promise.all(
      Array.from(this.executors.values()).map(async (executor) => {
        return executor.execute(events, context);
      }),
    );
  }

  public static isEmpty(): boolean {
    return this.executors.size === 0;
  }
}
