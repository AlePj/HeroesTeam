import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { ChangeDataTeamComponent } from './change-data-team/change-data-team.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    TopBarComponent,
    HeroDetailsComponent,
    ListTeamComponent,
    ChangeDataTeamComponent,
    ComicDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HeroesListComponent },
      { path: ':idHero', component: HeroDetailsComponent },
      { path: 'heroes/team', component: ListTeamComponent },
      { path: ':idHero/:idComic', component: ComicDetailsComponent },
      { path: 'heroes/team/edit', component: ChangeDataTeamComponent },
      { path: 'heroes/team/:idHero', component: HeroDetailsComponent },
      { path: 'heroes/team/:idHero/:idComic', component: ComicDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
