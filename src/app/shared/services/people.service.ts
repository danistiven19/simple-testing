import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) { }

  getPeople() {
    const peopleResponse = this.http.get('https://swapi.co/api/people/');
    return peopleResponse;
  }

  searchPeople(searchTerm: string) {
    const params = {'search': searchTerm};
    return this.http.get('https://swapi.co/api/people/', {params});
  }
}