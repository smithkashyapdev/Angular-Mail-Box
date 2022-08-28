import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/models/Email';
import { StateService } from 'src/app/services/state/state.service';
import { EmailService } from '../../services/email/email-service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit,OnDestroy {
  public currentEmail: Email;
  public id: string = '';
  public isSendShown: boolean = false;
  public isReplyShown: boolean = false;
  public isEditShown: boolean = false;
  public showOnSend: boolean = false;
  public showOnOthers: boolean = false;
  public currentParentRoute: string;
  private subscription=new Subscription;
  constructor(
    private emailService: EmailService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      this.subscription.add(this.emailService.getEmail(+params['id']).subscribe((email: Email) => {
        this.currentEmail = email;
        if (email.read === 0) {
          this.stateService.emailRead = email;
        }
      }));
    }));

    this.currentParentRoute = this.route.snapshot.url[0].path;

    switch (this.currentParentRoute) {
      case 'inbox':
        this.isReplyShown = true;
        this.showOnSend = true;
        break;
      case 'sent':
        this.showOnOthers = true;
        break;
      default:
        this.isSendShown = false;
        break;
    }
  }

  deleteEmail() {
    this.emailService.deleteMail(this.id).subscribe();
    this.stateService.updateTrashEmails(this.currentEmail);
    this.router.navigate([this.currentParentRoute]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
