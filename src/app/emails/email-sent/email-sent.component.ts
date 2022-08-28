import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css'],
})
export class EmailSentComponent implements OnInit,OnDestroy {
  emails: Email[] = [];
  hasEmails: boolean = true;
  private subscription= new Subscription;
  
  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.subscription.add(this.emailService
      .getSentEmails()
      .subscribe((emails: Email[]) => (this.emails = emails)));
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
