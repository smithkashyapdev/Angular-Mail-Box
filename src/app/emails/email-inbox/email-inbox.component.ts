import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/models/Email';
import { StateService } from 'src/app/services/state/state.service';
import { EmailService } from '../../services/email/email-service';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css'],
})
export class EmailInboxComponent implements OnInit,OnDestroy {
  emails: Email[] = [];
  hasEmails: boolean = true;
  unreadCount: number = 0;
  private subscription=new Subscription;

  constructor(
    private emailService: EmailService,
    private stateService: StateService
  ) {}
  

  ngOnInit() {
    this.subscription.add(this.stateService.getInboxEmails.subscribe((data: Email[]) => {
      this.emails = data;
    }));
  }

  ngDoCheck() {
    if (this.emails) {
      this.emails.length > 0
        ? (this.hasEmails = true)
        : (this.hasEmails = false);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
