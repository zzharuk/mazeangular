import { Component, Output } from '@angular/core';
import { AuthService } from './auth.service';
import { ScheduleService } from './services/schedule.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mazeangular';
  // @Output() schedules ;
  schedules;
  constructor(
    private auth: AuthService,
    private ScheduleService: ScheduleService,
    ) { 
      this.ScheduleService.getSchedules().subscribe(v => {
        this.schedules = v;
      });
     }


  ngOnInit() {
    this.auth.localAuthSetup();
  }

}




