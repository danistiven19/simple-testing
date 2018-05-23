import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {
  isDataLoading: Subject<boolean> = new Subject();
  isDataLoadingObservable$ = this.isDataLoading.asObservable();
}