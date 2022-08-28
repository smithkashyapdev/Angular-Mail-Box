import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from '../../services/email/email-service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  protected emails: Email[] = [];
  hasEmails: boolean = true;

  constructor(protected emailService: EmailService) {}

  ngOnInit(): void {}
}
