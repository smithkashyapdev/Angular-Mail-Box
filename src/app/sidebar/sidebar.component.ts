import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit ,OnDestroy{
  unReadCount: number = 0;
  private subscription= new Subscription

  constructor(private readonly stateService: StateService) {}

  ngOnInit(): void {
    this.subscription.add(this.stateService.getUnreadCount.subscribe((value) => {
      this.unReadCount = value;
      console.log('---this.unReadCount' + this.unReadCount);
    }));
  }


  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
