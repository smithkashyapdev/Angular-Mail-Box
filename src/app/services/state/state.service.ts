import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Email } from 'src/app/models/Email';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private inboxEmails$ = new BehaviorSubject<Email[]>([]);
  private trashEmails$ = new BehaviorSubject<Email[]>([]);
  private unreadCount$ = new BehaviorSubject<number>(0);

  private inboxEmails: Email[];
  private trashEmails: Email[];
  private unReadCount: number = 0;

  updateInboxEmails(emails: Email[]) {
    this.inboxEmails = emails;
    this.inboxEmails$.next(emails);
  }

  updateTrashEmails(email: Email) {
    this.removeEmailFromInbox(email);
    this.trashEmails.push(email);
    this.trashEmails$.next(this.trashEmails);
  }

  setTrashEmails(emails: Email[]) {
    this.trashEmails = emails;
    this.trashEmails$.next(emails);
  }

  public set emailRead(mail: Email) {
    mail.read = 1;
    this.updateUnReadCount();
  }

  public set unReadCounter(value: number) {
    this.unReadCount = value;
    this.updateUnReadCount();
  }

  private updateUnReadCount() {
    if (this.unReadCount > 0) {
      this.unReadCount -= 1;
      this.unreadCount$.next(this.unReadCount);
    }
  }

  public get getInboxEmails(): Observable<Email[]> {
    return this.inboxEmails$.asObservable();
  }

  public get getTrashEmails(): Observable<Email[]> {
    return this.trashEmails$.asObservable();
  }

  public get getUnreadCount(): Observable<number> {
    return this.unreadCount$.asObservable();
  }

  private removeEmailFromInbox(email: Email) {
    const index = this.inboxEmails.findIndex((e) => e.id === email.id);
    console.log('email-', index);
    if (index > -1) {
      this.inboxEmails.splice(index, 1);
      this.updateInboxEmails(this.inboxEmails);
    }
  }
}
