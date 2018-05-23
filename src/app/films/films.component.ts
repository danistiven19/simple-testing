import { Component, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FilmsService } from './../shared/services/films.service';
import { GlobalService } from './../shared/services/global.service';

@Component({
  selector: 'films',
  templateUrl: './films.html',
  styleUrls: ['./films.scss']
})
export class FilmsComponent implements OnDestroy {
  filmsResult$: Observable<any>;
  isDataLoading: boolean;
  destroy$: Subject<boolean> = new Subject();

  constructor(private filmsService: FilmsService, private globalService: GlobalService) {
    this.globalService.isDataLoadingObservable$.takeUntil(this.destroy$).subscribe((val: boolean) => this.isDataLoading = val);
  }

  ngOnInit()  {
    this.loadFilms();
  }

  loadFilms() {
    this.filmsResult$ = this.filmsService.getFilms().map((filmsResult: any) => {

      const results = [...filmsResult.results] || [];
      return results.map((film) => {
        return { ...film, ranked: film.producer ? film.producer === 'Rick McCallum' : false };
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
