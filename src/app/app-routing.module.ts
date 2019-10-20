import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './components/show/show.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/home/home.component';
import { SeasonComponent } from './components/season/season.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: "show/:id",
    component: ShowComponent,
    // pathMatch: 'full',
    children:[
      {
        path: "season/:id",
        component: SeasonComponent,
        children: [
          {
            path: "episode/:id",
            component: EpisodeComponent,
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
