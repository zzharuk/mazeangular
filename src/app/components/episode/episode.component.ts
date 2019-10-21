import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  episodeID:number;
  episode:{};
  constructor(
    private ShowService: ShowService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.parent.params)
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) => {
        return of(params.get('id'))
      })
    ).subscribe(d => {
      this.episodeID = +d;
      this.ShowService.getEpisode(this.episodeID).then(resp => {
        this.episode = resp;
      });
    });
  }

}
