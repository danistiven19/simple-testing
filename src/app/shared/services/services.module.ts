import { NgModule } from '@angular/core';
import { PeopleService } from './people.service';
import { FilmsService } from './films.service';
import { MyInterceptor } from './my-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalService } from './global.service';

@NgModule({
  providers: [
    PeopleService, FilmsService, GlobalService,
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: MyInterceptor,
    //     multi: true
    // }
    ]
})
export class ServicesModule { }