import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { EmailInboxItemComponent } from './email-inbox/email-inbox-item/email-inbox-item.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailSentItemComponent } from './email-sent/email-sent-item/email-sent-item.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { EmailTrashItemComponent } from './email-trash/email-trash-item/email-trash-item.component';
import { EmailTrashComponent } from './email-trash/email-trash.component';
import { EmailComponent } from './email/email.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmailComponent,
    EmailInboxComponent,
    EmailInboxItemComponent,
    EmailDetailComponent,
    EmailSentComponent,
    EmailSentItemComponent,
    EmailTrashComponent,
    EmailTrashItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EmailModule { }
