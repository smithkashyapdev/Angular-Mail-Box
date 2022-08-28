import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-email-trash',
  templateUrl: './email-trash.component.html',
  styleUrls: ['./email-trash.component.css'],
})
export class EmailTrashComponent implements OnInit,OnDestroy {
  emails: Email[];
  hasEmails: boolean = true;
  private subscription= new Subscription;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.subscription.add(this.stateService.getTrashEmails.subscribe(
      (emails: Email[]) => (this.emails = emails)
    ));
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
