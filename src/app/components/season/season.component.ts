import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
 season:any;
 id;
 episodesList: [];

  constructor( 
    private ShowService: ShowService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) =>
        of(params.get('id'))
      )
    ).subscribe(d => {
      this.id = d;
        this.ShowService.getEpisodes(this.id).then(resp => {
          this.episodesList = resp;
        });
    });
  }

}
