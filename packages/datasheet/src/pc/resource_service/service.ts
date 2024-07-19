

import { Store } from 'redux';
import { BroadcastTypes, IReduxState, Selectors } from '@apitable/core';
import { IServiceError, ResourceService } from '@apitable/widget-sdk';
import { SimpleEmitter } from 'modules/shared/simple_emitter';
import { UploadManager } from 'pc/utils/upload_manager';
import { KeybindingService } from '../../modules/shared/shortcut_key/keybinding_service';
import { Clipboard } from '../common/clipboard';

export class ResourceServiceEnhanced extends ResourceService {
  simpleEmitter!: SimpleEmitter;
  uploadManager!: UploadManager;
  keybindingService!: KeybindingService;
  clipboard!: Clipboard;

  constructor(
    public override store: Store<IReduxState>,
    public override onError: IServiceError,
  ) {
    super(store, onError);
  }

  override init() {
    if (this.initialized) {
      console.warn('! ' + 'Do not repeat the initialize resource service');
      return;
    }
    super.init();
    this.simpleEmitter = new SimpleEmitter();
    this.keybindingService = new KeybindingService();
    this.uploadManager = new UploadManager(5, this.commandManager);
    this.clipboard = new Clipboard(this.commandManager, this.uploadManager);
    console.log('resource service initialized successfully');
  }

  override destroy() {
    if (!this.initialized) {
      return;
    }
    super.destroy();
    this.simpleEmitter.destroy();
    this.uploadManager.destroy();
    this.keybindingService.destroy();
  }

  sendCursor(props: any) {
    this.roomService.sendMessages(BroadcastTypes.ENGAGEMENT_CURSOR, props);
  }
}

/**
 * For debug && testing
 */
(() => {
  if (!process.env.SSR) {
    (window as any).VkSelectors = Selectors;
  }
})();
