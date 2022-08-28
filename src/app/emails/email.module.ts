import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { EmailTrashComponent } from './email-trash/email-trash.component';
import { EmailComponent } from './email/email.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    EmailComponent,
    EmailInboxComponent,
    EmailDetailComponent,
    EmailSentComponent,
    EmailTrashComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class EmailModule {}
