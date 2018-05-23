import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PeopleService } from './../shared/services/people.service';
import { GlobalService } from './../shared/services/global.service';
import 'rxjs';

@Component({
  selector: 'peoples',
  templateUrl: './people.html',
  styleUrls: ['./people.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  peopleResult$: Observable<any>;
  isDataLoading$: Observable<boolean>;
  myForm: FormGroup;
  destroy$: Subject<boolean> = new Subject();
  searchTerm = new FormControl();

  constructor(private peopleService: PeopleService, private globalService: GlobalService) {
    this.searchTerm.valueChanges
      .debounceTime(200)
      .takeUntil(this.destroy$)
      .subscribe(($event: string) => {
        return this.peopleResult$ = this.peopleService.searchPeople($event);
      });

    this.isDataLoading$ = this.globalService.isDataLoadingObservable$;
  }

  ngOnInit() {
    this.peopleResult$ = this.peopleService.getPeople();
    this.myForm = new FormGroup ({
      searchTerm: this.searchTerm
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
