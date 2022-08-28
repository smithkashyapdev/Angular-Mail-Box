import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email/email-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  showClass = '';
  successText = '';
  successResponce: any;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.sendSuccess.subscribe(
      (data: any) => (this.successResponce = data)
    );
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

    setTimeout(() => {
      this.showClass = 'hide';
    }, 1500);
  }
}
