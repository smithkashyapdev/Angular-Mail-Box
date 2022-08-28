import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css'],
})
export class EmailSentComponent implements OnInit {
  emails: Email[] = [];
  hasEmails: boolean = true;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService
      .getSentEmails()
      .subscribe((emails: Email[]) => (this.emails = emails));
  }

  ngDoCheck() {
    if (this.emails) {
      this.emails.length > 0
        ? (this.hasEmails = true)
        : (this.hasEmails = false);
    }
  }
}
