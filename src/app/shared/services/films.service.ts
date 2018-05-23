import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get('https://swapi.co/api/films/');
  }
}