import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDetailComponent } from './emails/email-detail/email-detail.component';
import { EmailInboxComponent } from './emails/email-inbox/email-inbox.component';
import { EmailSentComponent } from './emails/email-sent/email-sent.component';
import { EmailTrashComponent } from './emails/email-trash/email-trash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
  { path: 'inbox', component: EmailInboxComponent },
  { path: 'inbox/:id', component: EmailDetailComponent },
  { path: 'sent', component: EmailSentComponent },
  { path: 'trash', component: EmailTrashComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
