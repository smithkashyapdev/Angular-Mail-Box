import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { StateService } from 'src/app/services/state/state.service';
import { EmailService } from '../../services/email/email-service';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css'],
})
export class EmailInboxComponent implements OnInit {
  emails: Email[] = [];
  hasEmails: boolean = true;

  constructor(
    private emailService: EmailService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.emailService.getInbox().subscribe((data: Email[]) => {
      this.stateService.updateInboxEmails(data);
      this.emails = this.stateService.getInboxEmails();
    });
  }

  ngDoCheck() {
    if (this.emails) {
      this.emails.length > 0
        ? (this.hasEmails = true)
        : (this.hasEmails = false);
    }
  }
}
