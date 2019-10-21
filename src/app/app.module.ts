import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { ShowComponent } from './components/show/show.component';
import { HomeComponent } from './components/home/home.component';
import { PopularListComponent } from './components/popular-list/popular-list.component';
import { PopularItemComponent } from './components/popular-item/popular-item.component';
import { SeasonComponent } from './components/season/season.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleItemComponent,
    EpisodeComponent,
    ShowComponent,
    HomeComponent,
    PopularListComponent,
    PopularItemComponent,
    SeasonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
