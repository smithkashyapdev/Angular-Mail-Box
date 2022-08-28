import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { EmailService } from 'src/app/services/email/email-service';

@Component({
  selector: 'app-email-trash-item',
  templateUrl: './email-trash-item.component.html',
  styleUrls: ['./email-trash-item.component.css'],
})
export class EmailTrashItemComponent implements OnInit {
  @Input() email: Email;
  @Input() id: string;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  trimContent(message: string) {
    return message.substr(0, 60) + '\u2026';
  }

  deleteEmail() {
    this.emailService.deleteMail(this.id).subscribe();
  }
}
