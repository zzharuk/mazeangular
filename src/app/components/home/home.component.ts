import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { ShowService } from '../../services/show.service';
import { IShow } from '../../interfaces/ishow'
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  schedules :[IShow];

  constructor(
    private ScheduleService: ScheduleService,
    private ShowService: ShowService,
    
  ) {
    this.ScheduleService.getSchedules().then((resp) => {
      this.schedules = resp.sort((a,b)=>{
        return a.airstamp - b.airstamp;
      });
    });
    
   }

  ngOnInit() {

  }

}
