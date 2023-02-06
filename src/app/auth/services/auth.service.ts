import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlPublic: string = environment.authPublic;
  private baseUrl: string = environment.auth;

  private _usuario!: Usuario;

  get usuario() {
    return {...this._usuario};
  }

  constructor( private http: HttpClient ) { }
  
  login(content : Login)
  {

    const url = `${this.baseUrlPublic}/login`;

    return this.http.post(url,content)
    .pipe(
      tap( (resp: any) => {
        if(resp.token)
        {
          localStorage.setItem('token', resp.token);

        }
      }),
      map( resp => true ),
      catchError( err => of(false)),
    )

  }

  getUser()
  {
    const url = `${this.baseUrl}/user`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(url, {headers}).pipe(
      tap( (resp: any) => {

      }),
    )
  }

  validarToken(): Observable<boolean> 
  {
    const url = `${this.baseUrl}/user`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(url, {headers})
    .pipe(
      tap(
        resp => {
          if(resp)
          {
            this._usuario = resp;
          }
        }
      ),
      map( resp => {
        return true;
      } ),
      catchError( err => of(false)),
    );
  }

  logOut()
  {
    localStorage.clear();
  }

  register(reg: Register)
  {
    const url = `${this.baseUrlPublic}/signup`;
    return this.http.post(url, reg).pipe(
      catchError( err => of(false)),
    );
  }

}
