import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private globalService: GlobalService) {}
  
  /* Podemos solo revisar lo que tenemos en el request! */
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     console.log(req);
     return next.handle(req);
  } 

  /* Podemos incluir información transversal a la aplicación como el Token de la sesión! */
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const TOKEN = '34343bBHHHDBBSy433';
  //   req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + TOKEN) });

  //   return next.handle(req);
  // }

  /* Podemos disparar eventos cuando la aplicación está trayendo información (spinners) */
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.globalService.isDataLoading.next(true);
  //   return next.handle(req).finally(() => this.globalService.isDataLoading.next(false));
  // }
}