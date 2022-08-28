import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailService } from '../services/email/email-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit,OnDestroy {
  showClass = '';
  successText = '';
  successResponce: any;
  private subscription=new Subscription;

  constructor(private emailService: EmailService) {}
  

  ngOnInit() {
    this.subscription.add(this.emailService.sendSuccess.subscribe(
      (data: any) => (this.successResponce = data)
    ));
  }

  ngDoCheck() {
    switch (this.successResponce) {
      case 'send':
        this.showClass = 'show';
        this.successText = 'Your email has been send.';
        break;
      case 'save':
        this.showClass = 'show';
        this.successText = 'Your draft has been saved.';
        break;
      case 'delete':
        this.showClass = 'show';
        this.successText = 'The email has been deleted.';
        break;
      default:
        break;
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
