

import { Hocuspocus } from '@hocuspocus/server';
import { Injectable } from '@nestjs/common';
import { getIPAddress } from 'shared/helpers/system.helper';

@Injectable()
export abstract class HocuspocusBaseService {

  init(port: number): Hocuspocus {
    return new Hocuspocus({
      port,
    });
  }
}

@Injectable()
export class HocuspocusService extends HocuspocusBaseService {

  constructor() {
    super();
  }

  override init(port: number): Hocuspocus {
    return new Hocuspocus({
      name: getIPAddress(),
      port,
      async onListen(data) {
        console.log(`Hocuspocus server[${data.configuration.name}] is listening on port "${data.port}"!`);
      },
    });
  }
}