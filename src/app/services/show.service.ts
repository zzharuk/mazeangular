import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() {}

  getShowList(): Promise<any> {
    return fetch(`http://api.tvmaze.com/shows?page=1`)
      .then(r => r.json())
      .then(schedule => schedule.map((item) => {
        return item;
      })
    );
  }
  getShow(id:number): Promise<any> {
    return fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(r => r.json())
      .then(show => show);
  }
  getSeasons(id:number): Promise<any> {
    return fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(r => r.json())
      .then(show => show);
  }
  // http://api.tvmaze.com/seasons/18326/episodes
  getEpisodes(id): Promise<any> { 
    return fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
      .then(r => r.json())
      .then(show => show);
  }

  // http://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1
  getEpisode(id): Promise<any> {
    return fetch(`http://api.tvmaze.com/episodes/${id}`)
      .then(r => r.json())
      .then(show => show);
  }
}
