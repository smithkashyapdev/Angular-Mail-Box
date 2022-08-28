import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from '../../../services/email/email-service';

@Component({
  selector: 'app-email-inbox-item',
  templateUrl: './email-inbox-item.component.html',
  styleUrls: ['./email-inbox-item.component.css'],
})
export class EmailInboxItemComponent implements OnInit {
  @Input() email: Email;
  @Input() id: string = '';

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  trimContent(message: string) {
    return message.substr(0, 60) + '\u2026';
  }

  deleteEmail(id: string) {
    this.emailService.deleteMail(this.id).subscribe();
  }
}
