import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../../interfaces/ishow';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  @Input() scheduleItem;
  
  constructor() {

  }
  
  ngOnInit() {
  }

}
