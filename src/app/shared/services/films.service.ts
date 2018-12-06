import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get('https://swapi.co/api/films/');
  }

  rankFilm(rankValue: number) {
    return of();
  }
}