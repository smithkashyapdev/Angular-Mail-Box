import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Email } from 'src/app/models/Email';
import { EmailService } from '../../services/email/email-service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit {
  public currentEmail: Email;
  public id: string = '';
  public isSendShown: boolean = false;
  public isReplyShown: boolean = false;
  public isEditShown: boolean = false;
  public showOnSend: boolean = false;
  public showOnOthers: boolean = false;
  public currentParentRoute: string;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.emailService.getEmail(+params['id']).subscribe((email: Email) => {
        this.currentEmail = email;
      });
    });

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
    this.router.navigate([this.currentParentRoute]);
  }
}
