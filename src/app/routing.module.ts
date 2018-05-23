import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
  { path: '**', redirectTo: '#', pathMatch: 'full' }
];
 
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }