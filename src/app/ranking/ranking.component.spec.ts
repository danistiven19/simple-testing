describe('RankingComponent', () => {
  describe('ngOnInit()', () => {
    it ('Should initialize the list of films (R1)', () => {
      
    });

    it('Should initialize a form with the film and the votes empty (R1)', () => {
      
    });
  });

  describe('loadFilms()', () => {
    it('Should load the list of films (R1)', () => {
      
    });

    it('Should not map the list of films when empty (R2)', () => {
      
    });

    it('Should map the list of items when there are results (R2)', () => {
      
    });

    // Initial test set for mapping films
    // it('Should set 0 stars when film producer is not "Rick McCallum"', () => {
      
    // });

    // it('Should set 3 stars when film producer is "Rick McCallum"', () => {
      
    // });

    // it('Should disable stars when film producer is "Rick McCallum"', () => {
      
    // });
  });

  describe('hasFilms()', () => {
    it('Should returns true when there are films', () => {
    
    });

    it('Should returns false when there are not films', () => {
      
    });
  });

  describe('initForm() (R1)', () => {
    it('Should create a new form with "film" control', () => {
      
    });

    it('Should create a new form with "vote" control', () => {
      
    });
  });

  describe('mapFilms()', () => {
    it('Should set 0 stars when film producer is not "Rick McCallum" (R3)', () => {
      
    });

    it('Should set 3 stars when film producer is "Rick McCallum" (R2)', () => {
      
    });

    it('Should disable stars when film producer is "Rick McCallum" (R2)', () => {
      
    });
  });

  describe('isFilmRanked() (R5)', () => {
    it('Should returns true when the film already ranked', () => {
      
    });
  });

  describe('onSave()', () => {
    it('Should save the film selected with the vote (R6)', () => {
      
    });

    it('Should display a message when the vote was successfully stored (R7)', () => {
      
    });

    it('Should display an error message when the vote was not stored (R8)', () => {
      
    });

    it('Should clear out the selected film and vote radios (R9)', () => {
      
    });
  });
});