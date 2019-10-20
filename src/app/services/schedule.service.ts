import { Injectable } from '@angular/core';

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
