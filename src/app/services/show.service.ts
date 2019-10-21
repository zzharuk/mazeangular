import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() {}

  getShowPage(num): Promise<any> {
    return fetch(`https://api.tvmaze.com/shows?page=${num}`)
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
  // 
  // https://api.tvmaze.com/seasons/${id}/episodes
  getEpisodes(id): Promise<any> { 
    return fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(r => r.json())
      .then(show => show);
  }

  // http://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1
  getEpisode(id): Promise<any> {
    return fetch(`https://api.tvmaze.com/episodes/${id}`)
      .then(r => r.json())
      .then(show => show);
  }
}
