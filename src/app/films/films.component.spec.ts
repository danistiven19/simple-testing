import 'rxjs';
import { Observable, Subject } from 'rxjs';
import { FilmsComponent } from './films.component';
import { FilmsService } from '../shared/services/films.service';

describe('FilmsComponent', () => {
  let filmsComponentInstance: FilmsComponent;
  const mockDependencies: any = {
    filmsService: {
      getFilms: jasmine.createSpy('getFilms').and.returnValue(Observable.empty())
    },
    globalService: {
      isDataLoadingObservable$: Observable.from([])
    }
  };

  beforeEach(() => {
    filmsComponentInstance = new FilmsComponent(
      mockDependencies.filmsService,
      mockDependencies.globalService
    );
  });

  describe('ngOnInit()', () => {
    it('Should load the films', () => {
      spyOn(filmsComponentInstance, 'loadFilms');
      filmsComponentInstance.ngOnInit();
      expect(filmsComponentInstance.loadFilms).toHaveBeenCalled();
    });
  });

  describe('loadFilms()', () => {
    it('Should load the films from the service', () => {
      filmsComponentInstance.loadFilms();
      expect(mockDependencies.filmsService.getFilms).toHaveBeenCalled();
    });

    it('Should map the results when there are more than 1', () => {
      const filmResultsTest = [
        { id: 1, title: 'title test', producer: 'Rick McCallum' },
        { id: 2, title: 'title test' },
        { id: 3, title: 'title test' }
      ];

      const ranked = [
        { id: 1, title: 'title test', producer: 'Rick McCallum', ranked: true },
        { id: 2, title: 'title test', ranked: false },
        { id: 3, title: 'title test', ranked: false }
      ];
      mockDependencies.filmsService.getFilms = jasmine.createSpy('getFilms').and.returnValue(Observable.of({ results: filmResultsTest }))
      filmsComponentInstance.loadFilms();
      filmsComponentInstance.filmsResult$.subscribe((result) => {
        expect(result).toEqual(ranked);
      });
    });
  });

  describe('mapFilms()', () => {
    it('Should do nothing when there is not film selected', () => {
      
    });

    it('Should calculate the average (R10)', () => {
      
    });

    it('Should get the number of votes for the selected film (R11)', () => {
      
    });

    it('Should set most popular when there are more than 5 votes and the average is equals to 3 (R12)', () => {
      
    });
  });

  describe('ngOnDestroy()', () => {
    it('Should trigger the detroy$ stream and then unsusbscribe', () => {
      filmsComponentInstance.destroy$ = new Subject();
      spyOn(filmsComponentInstance.destroy$, 'next');
      spyOn(filmsComponentInstance.destroy$, 'unsubscribe');

      filmsComponentInstance.ngOnDestroy();
      expect(filmsComponentInstance.destroy$.next).toHaveBeenCalledWith(true);
      expect(filmsComponentInstance.destroy$.unsubscribe).toHaveBeenCalled();
    });
  });
}); 