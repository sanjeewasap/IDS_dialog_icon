import { Component } from '@angular/core';

import {
  SohoMessageService,
  SohoMessageRef
} from 'ids-enterprise-ng';

@Component({
  selector: 'app-message-demo',
  templateUrl: 'message.demo.html'
})
export class MessageDemoComponent {
  /** The message dialog reference. */
  dialog?: SohoMessageRef;

  /** The result. */
  closeResult?: string;

  /**
   * Constructor.
   *
   * @param messageService - the message dialog service.
   */
  constructor(private messageService: SohoMessageService) {
  }

  openError() {
    const buttons = [
      {
        text: 'Restart Now', click: (_e: any, modal: any) => {
          modal.close(true); (this.dialog as any) = null;
        }, isDefault: true
      }
    ];

    this.dialog = this.messageService
      .error()
      .title('<span>Application Error</span>')
      .message(`This application has experienced a system error due to the lack of internet access.
                Please restart the application in order to proceed.`)
      .buttons(buttons)
      .beforeOpen(() => {
        console.log('before open');
        return true;
      })
      .beforeClose(() => {
        console.log('before close');
        return true;
      })
      .open();
  }

}
