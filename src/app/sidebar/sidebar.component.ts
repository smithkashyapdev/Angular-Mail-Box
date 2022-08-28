import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  unReadCount: number = 0;

  constructor(private readonly stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.getUnreadCount.subscribe((value) => {
      this.unReadCount = value;
    });
  }
}
