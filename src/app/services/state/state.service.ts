import { Injectable } from '@angular/core';
import { Email } from 'src/app/models/Email';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private inboxEmails: Email[];
  private trashEmails: Email[];

  getInboxEmails(): Email[] {
    return this.inboxEmails;
  }

  getTrashEmails(): Email[] {
    return this.trashEmails;
  }

  updateInboxEmails(emails: Email[]) {
    this.inboxEmails = emails;
  }

  updateTrashEmails(email: Email) {
    this.removeEmailFromInbox(email);
    this.trashEmails.push(email);
  }

  private removeEmailFromInbox(email: Email) {
    const index = this.inboxEmails.indexOf(email);
    if (index > -1) {
      this.inboxEmails.splice(index, 1);
    }
  }
}
