import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }
  
  login(email:string, password: string)
  {

    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    this.http.post(url,body)

  }

}
