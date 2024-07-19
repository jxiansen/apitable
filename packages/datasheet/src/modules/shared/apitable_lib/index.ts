import { t, Player } from '@apitable/core';
import * as nav from './nav';

const APITable: any = {
  apphook: Player.getAppHook(), // Expose apphook for external event interaction
  nav,
  t,
};

export { APITable };
