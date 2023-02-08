import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { career } from '../home/interfaces/career.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrerService {

  constructor(
    private http : HttpClient
  ) { }

  urlPublication = environment.publication


  getCarrers(){
    const url = `${this.urlPublication}/career`;
    
    return this.http.get<career[]>(url);
  }

}
