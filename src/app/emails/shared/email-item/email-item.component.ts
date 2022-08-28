import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css'],
})
export class EmailItemComponent implements OnInit {
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
