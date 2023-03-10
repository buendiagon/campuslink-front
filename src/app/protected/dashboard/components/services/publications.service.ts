import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { CreatePublication, Input } from '../interfaces/inputs.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(
    private http : HttpClient,
  ) { }

  url = environment.publication;

  getPublications(page:number, size:number){

    return this.http.get<Input>(this.url+`?page=${page}&size=${size}`);
  }

  createPublication(publication:CreatePublication){
    return this.http.post(this.url, publication);
  }

  getPublicationsByCareer(criterio:string,page:number, size:number){
    return this.http.get<Input>(this.url+`/id_career/${criterio}?page=${page}&size=${size}`);
  }

  createResponse(body:any){
    return this.http.post(this.url, body);
  }

  getPublicationsBySearch(criterio:string){
    return this.http.get<Input>(this.url+`/search?search=${criterio}`);
  }

}
