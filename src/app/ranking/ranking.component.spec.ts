import { RankingComponent } from './ranking.component';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/throw';

describe('RankingComponent', () => {
  let rankingTest;
  const mockDependencies = {
    filmsService: jasmine.createSpyObj('filmsService', {
      getFilms: of([]),
      rankFilm: of([])
    }),
    fb: jasmine.createSpyObj('fb', {
      group: {},
      reset: {}
    })
  };

  const filmList = [
    { id: 1, name: 'test 1', producer: 'Peter G' },
    { id: 2, name: 'test 2', producer: 'Peter G' },
    { id: 3, name: 'test 3', producer: 'Peter G' }
  ];

  const specialFilms = [
    { id: 4, name: 'test 4', producer: 'Rick McCallum' },
    { id: 5, name: 'test 5', producer: 'Rick McCallum' },
    { id: 6, name: 'test 6', producer: 'Rick McCallum' }
  ];

  const initializeFilms = [ ... filmList].map((film) => ({ ... film, stars: 0, isStarsDisabled: false }));
  const initializeSpecialFilms = [ ... specialFilms].map((film) => ({ ... film, stars: 3, isStarsDisabled: false }));

  beforeEach(() => {
    rankingTest = new RankingComponent(
      mockDependencies.fb,
      mockDependencies.filmsService
    );
  });

  describe('ngOnInit()', () => {
    it ('Should initialize the list of films (R1)', () => {
      spyOn(rankingTest, 'loadFilms');
      rankingTest.ngOnInit();
      expect(rankingTest.loadFilms).toHaveBeenCalled();
    });

    it('Should initialize a form with the film and the votes empty (R1)', () => {
      spyOn(rankingTest, 'initRankingForm');
      rankingTest.ngOnInit();
      expect(rankingTest.initRankingForm).toHaveBeenCalled();
    });
  });

  describe('loadFilms()', () => {
    it('Should load the list of films (R1)', () => {
      rankingTest.loadFilms();
      expect(mockDependencies.filmsService.getFilms).toHaveBeenCalled();
    });

    it('Should map the list of items when there are results (R2)', () => {
      spyOn(rankingTest, 'mapFilms');
      mockDependencies.filmsService.getFilms.and.returnValue(of(filmList));
      rankingTest.loadFilms();
      expect(rankingTest.mapFilms).toHaveBeenCalled();
    });

    it('Should not map the list of films when empty (R2)', () => {
      mockDependencies.filmsService.getFilms.and.returnValue(empty());
      spyOn(rankingTest, 'mapFilms');
      rankingTest.loadFilms();
      expect(rankingTest.mapFilms).not.toHaveBeenCalled();
    });

    // Initial test set for mapping films
    // it('Should set 0 stars when film producer is not "Rick McCallum"', () => {
      
    // });

    // it('Should set 3 stars when film producer is "Rick McCallum"', () => {
      
    // });

    // it('Should disable stars when film producer is "Rick McCallum"', () => {
      
    // });
  });

  // UI related
  // describe('hasFilms()', () => {
  //   it('Should returns true when there are films', () => {
    
  //   });

  //   it('Should returns false when there are not films', () => {
      
  //   });
  // });

  describe('initRankingForm() (R1)', () => {
    it('Should create a new form', () => {
      rankingTest.initRankingForm();
      expect(mockDependencies.fb.group).toHaveBeenCalled();
  });
});

  describe('mapFilms()', () => {
    it('Should set 0 stars when film producer is not "Rick McCallum" (R3)', () => {
      rankingTest.mapFilms(filmList);
      expect(rankingTest.currentFilmList).toEqual(initializeFilms);
    });

    it('Should set 3 stars when film producer is "Rick McCallum" (R2)', () => {
      rankingTest.mapFilms(specialFilms);
      rankingTest.currentFilmList.forEach(element => {
        expect(element.stars).toEqual(3);
      });
    });

    it('Should disable stars when film producer is "Rick McCallum" (R2)', () => {
      rankingTest.mapFilms(specialFilms);
      rankingTest.currentFilmList.forEach(element => {
        expect(element.isStarsDisabled).toBeTruthy();
      });
    });
  });

  describe('isFilmRanked() (R5)', () => {
    it('Should returns true when the film already ranked', () => {
      
    });
  });

  describe('onSave()', () => {
    beforeEach(() => {
      spyOn(rankingTest, 'handleSuccessfullySave');
    });

    const rankValueTest = 2;
    it('Should save the film selected with given vote (R6)', () => {
      rankingTest.onSave(rankValueTest);
      expect(mockDependencies.filmsService.rankFilm).toHaveBeenCalledWith(rankValueTest);
    });

    it('Should display an error message when the vote was not stored (R8)', () => {
      const successMessage = { message: 'error'};
      const errorObse = Observable.throw('error');
      mockDependencies.filmsService.rankFilm.and.returnValue(errorObse);
      spyOn(console, 'log');
      rankingTest.onSave(rankValueTest);
      expect(console.log).toHaveBeenCalledWith(successMessage);
    });

    // realized that this could be in another function
    // it('Should display the message when the vote was successfully stored (R7)', () => {
    //   const successMessage = { message: 'success'};
    //   mockDependencies.filmsService.rankFilm.and.returnValue(of('stored!'));
    //   spyOn(console, 'log');
    //   rankingTest.onSave(rankValueTest);
    //   expect(console.log).toHaveBeenCalledWith(successMessage);
    // });

    // it('Should clear out the selected film and vote radios when vote is stored (R9)', () => {
    //   const successMessage = { message: 'success'};
    //   mockDependencies.filmsService.rankFilm.and.returnValue(of('stored!'));
    //   spyOn(console, 'log');
    //   rankingTest.onSave(rankValueTest);
    //   expect(console.log).toHaveBeenCalledWith(successMessage);
    // });
  });

  describe('handleSuccessfullySave()', () => {
    beforeEach(() => {
      rankingTest.filmForm = jasmine.createSpyObj('filmForm', {
        reset: {}
      });
    });

    it('Should display the message when the vote was successfully stored (R7)', () => {
      const successMessage = { message: 'success'};
      spyOn(console, 'log');
      rankingTest.handleSuccessfullySave();
      expect(console.log).toHaveBeenCalledWith(successMessage);
    });

    it('Should clear out the selected film and vote radios when vote is stored (R9)', () => {
      const successMessage = { message: 'success'};
      rankingTest.handleSuccessfullySave();
      expect(rankingTest.filmForm.reset).toHaveBeenCalled();
    });
  });
});
