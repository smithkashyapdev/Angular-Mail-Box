import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailItemComponent } from './email-item/email-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmailItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [EmailItemComponent],
})
export class SharedModule {}
