import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from '../../models/Email';
import { Observable, of } from 'rxjs';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public sendSuccess = new EventEmitter<String>();

  constructor(private http: HttpClient, private stateService: StateService) {}

  loadEmailFromDb() {
    this.getInbox().subscribe((data: Email[]) => {
      this.stateService.updateInboxEmails(data);
      const unreadCount = data.filter((e) => e.read === 0).length;
      this.stateService.unReadCounter = unreadCount;
    });

    this.getTrashEmails().subscribe((data: Email[]) => {
      this.stateService.setTrashEmails(data);
    });
  }

  getInbox(): Observable<Email[]> {
    return this.http.get<Email[]>('http://localhost:3000/emails');
  }

  getSentEmails(): Observable<Email[]> {
    return of([]);
  }

  getTrashEmails(): Observable<Email[]> {
    return of([]);
  }

  getEmail(id: number): Observable<Email> {
    return this.http.get<Email>('http://localhost:3000/emails/' + id);
  }

  sendEmail(email: Email) {
    email.type === 'send'
      ? this.sendSuccess.emit('send')
      : this.sendSuccess.emit('save');
    return this.http.post('http://localhost:8080/api/emails/', email);
  }

  saveDraft(id: number, email: Email) {
    this.sendSuccess.emit('save');
    return this.http.put('http://localhost:8080/api/emails/' + id, email);
  }

  deleteMail(id: string) {
    this.sendSuccess.emit('delete');
    return this.http.delete('http://localhost:8080/api/emails/' + id);
  }
}
