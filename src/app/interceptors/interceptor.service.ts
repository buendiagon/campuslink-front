import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.url.includes('public/api'))
    {
      return next.handle(req);
    }

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });

    // const reqClone = req.clone({headers});

    return next.handle( authRequest );

  }

  
}
