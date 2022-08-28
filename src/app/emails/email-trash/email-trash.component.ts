import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-email-trash',
  templateUrl: './email-trash.component.html',
  styleUrls: ['./email-trash.component.css'],
})
export class EmailTrashComponent implements OnInit {
  emails: Email[];
  hasEmails: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.getTrashEmails.subscribe(
      (emails: Email[]) => (this.emails = emails)
    );
  }

  ngDoCheck() {
    if (this.emails) {
      this.emails.length > 0
        ? (this.hasEmails = true)
        : (this.hasEmails = false);
    }
  }
}
