import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription, Observable, from,of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  private id;
  show: any;
  seasons: any;
  episodes: any;
  constructor(
      private ShowService: ShowService,
      private route: ActivatedRoute
    ) {
      
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) =>
        of(params.get('id'))
      )
    ).subscribe(d => {
      this.id = d;
      this.ShowService.getShow(this.id).then(r => {
        this.show = r;
      }).then(()=>{
        this.ShowService.getSeasons(this.id).then(resp => {
          this.seasons = resp;
        });
      })
      
    });
  }

}
