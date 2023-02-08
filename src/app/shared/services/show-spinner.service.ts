import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShowSpinnerService {

  public isloading$ = new Subject<boolean>();

  constructor() { }

  show(): void {
    this.isloading$.next(true);
  }

  hide(): void {
    this.isloading$.next(false);
  }
}
