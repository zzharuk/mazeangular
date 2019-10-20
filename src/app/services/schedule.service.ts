import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  getSchedules(): Promise<any> {
    return fetch(`http://api.tvmaze.com/schedule/`)
      .then(r => r.json())
      .then(schedule => schedule.map((item) => {
        return item;
      })
    );
  }
}
