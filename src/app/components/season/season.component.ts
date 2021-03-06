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
 id:number;
 season_num;
allEpisodesList;
seasonEpisodes;
  showID:number;

  constructor( 
    private ShowService: ShowService,
    private route: ActivatedRoute
    ) { 
      
    }

  ngOnInit() {

    this.route.parent.params.subscribe(params => {
      this.id = +params.id;
      this.ShowService.getEpisodes(this.id).then(resp => { 
        this.allEpisodesList = resp;
        return resp;
      }).then(resp => {
        this.route.params.subscribe(params => {
          this.season_num = +params.id;
          this.seasonEpisodes = this.allEpisodesList.filter((ep) => {
            return ep.season === this.season_num;
          });

        });
      })
     });
   
    
  }

}
