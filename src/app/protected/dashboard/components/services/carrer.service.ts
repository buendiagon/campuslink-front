import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { career } from '../home/interfaces/career.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrerService implements OnInit {

  carreras = new BehaviorSubject<career[]>([]);
  selectedId = new BehaviorSubject<number | undefined>(undefined);
  contains = false;
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  urlPublication = environment.publication

  loadCarrers(){

    if(this.carreras.getValue().length > 0) {return};

    this.getCarrers().subscribe( resp => {
      this.carreras.next(resp);
      this.contains = true;
    })
  }


  getCarrers(){
    const url = `${this.urlPublication}/career`;
    
    return this.http.get<career[]>(url);
  }

}
