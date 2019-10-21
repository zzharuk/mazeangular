import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }
  getSchedules(): Promise<any> {
    return fetch(`https://api.tvmaze.com/schedule/`)
      .then(r => r.json())
      .then(schedule => schedule.map((item) => {
        return item;
      })
    );
  }
}
