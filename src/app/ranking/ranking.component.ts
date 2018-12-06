import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../shared/services/films.service';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.html'
})
export class RankingComponent implements OnInit {
  currentFilmList;
  filmForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.loadFilms();
    this.initRankingForm();
  }

  loadFilms() {
    this.filmsService.getFilms().pipe(
      map(this.mapFilms)
    ).subscribe();
  }

  mapFilms = (filmList) => {
    this.currentFilmList = filmList.map((film) => {
      const isMainProducer = film.producer === 'Rick McCallum';
      return {
        ...film,
        stars: isMainProducer ? 3 : 0,
        isStarsDisabled: isMainProducer
      };
    });
  }

  initRankingForm() {
    this.filmForm = this.fb.group({
      film: new FormControl(),
      vote: new FormControl()
    })
  }

  onSave(rankValue?: number) {
    this.filmsService.rankFilm(rankValue)
    .subscribe(
      this.handleSuccessfullySave,
      () => console.log({ message: 'error'})
    );
  }

  handleSuccessfullySave = () => {
    this.filmForm.reset();
    console.log({ message: 'success'});
  }
}
