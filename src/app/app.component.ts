import { Component, OnInit } from '@angular/core';
import { EmailService } from './services/email/email-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mail-box-app';

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.loadEmailFromDb();
  }
}
