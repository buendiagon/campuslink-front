import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Details } from '../interfaces/detail.iterface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  details = new BehaviorSubject<Details | null>(null);

  constructor(
    private http : HttpClient,
  ) { }

  url = environment.publication
  
  getDetails(id: number){
    const urlbase = this.url + `/id_publication/${id}`;
    return this.http.get<any>(urlbase);
  }

  setDetails(id: number){
    this.getDetails(id).subscribe((data: any) => {
      this.details.next(data);
    });
  }


  createResponse(body:any){
    return this.http.post(this.url, body);
  }

  createComment(body:any){
    return this.http.post(this.url+'/comments', body);
  }

  createRate(body:any){
    return this.http.post(this.url+'/score', body);
  }

}
