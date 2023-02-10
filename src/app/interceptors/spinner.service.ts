import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable,  } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { ShowSpinnerService } from '../shared/services/show-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService implements HttpInterceptor {

  isloading$ = new Subject<boolean>();

  constructor(
    private showSpinnerService: ShowSpinnerService
  ) { 

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.show();
    this.showSpinnerService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.hide();
        this.showSpinnerService.hide();
      }
      )
    );
  }


  show(): void {
    this.isloading$.next(true);
  }

  hide(): void {
    this.isloading$.next(false);
  }

}
