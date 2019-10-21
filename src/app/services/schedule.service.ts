import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }
  getSchedules(): Observable<[]> {
    return from(fetch(`https://api.tvmaze.com/schedule/`)
      .then(r => r.json())
      .then(schedule => schedule)
      ).pipe(
      catchError(err => of([]))
    );
  }
}
