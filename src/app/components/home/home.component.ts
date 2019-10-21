import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { FormBuilder } from '@angular/forms';
import { ShowService } from '../../services/show.service';
import { IShow, IScheduleCard } from '../../interfaces/ishow'
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title = "Schrdule";
  schedules;
  constructor(
    private ScheduleService: ScheduleService,
  ) {
   }

  ngOnInit() {
    // console.log(this.schedules);
    this.ScheduleService.getSchedules().subscribe(
      v => this.schedules = v
    );
  }
}
