import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { RankingComponent } from './ranking/ranking.component';
import { AppRoutingModule } from './routing.module';
import { ServicesModule } from './shared/services/services.module';

@NgModule({
  imports: [BrowserModule, ServicesModule, HttpClientModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, PeopleComponent, FilmsComponent, RankingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
