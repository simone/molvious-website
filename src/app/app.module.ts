import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FixtureComponent } from './main/fixture/fixture.component';
import { LastMatchComponent } from './main/last-match/last-match.component';
import { PopularPlayersComponent } from './main/popular-players/popular-players.component';
import { TeamRankingComponent } from './main/team-ranking/team-ranking.component';
import { NextMatchComponent } from './main/next-match/next-match.component';
import { TrendingNewsComponent } from './main/trending-news/trending-news.component';
import { PopularNewsComponent } from './main/popular-news/popular-news.component';
import { ClubMediaComponent } from './main/club-media/club-media.component';
import { AdvertisementComponent } from './main/advertisement/advertisement.component';
import { BlogComponent } from './main/blog/blog.component';
import { FeaturedComponent } from './main/featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalendarComponent } from './main/calendar/calendar.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      TopMenuComponent,
      BannerComponent,
      MainComponent,
      FixtureComponent,
      FeaturedComponent,
      LastMatchComponent,
      BlogComponent,
      AdvertisementComponent,
      PopularPlayersComponent,
      CalendarComponent,
      ClubMediaComponent,
      TeamRankingComponent,
      PopularNewsComponent,
      TrendingNewsComponent,
      NextMatchComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      MomentModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
