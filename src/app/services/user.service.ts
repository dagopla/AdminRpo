import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, of, tap } from 'rxjs';
import { User } from '../models/usuario.model';
import { Router } from '@angular/router';

const baseUrl=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
    private router:Router
    ) { }

  createUser(data:RegisterForm){
    return this.http.post(`${baseUrl}/users`,data);
  }
  login(body:LoginForm){
    return this.http.post<any>(`${baseUrl}/auth`,body)
    .pipe(
      tap(resp=>{
        localStorage.setItem('token',resp.token);
      })
    );
  }
  loginGoogle(token:string){
    return this.http.post<any>(`${baseUrl}/auth/google`,{token})
    .pipe(
      tap(resp=>{
        console.log('logingoole');
        localStorage.setItem('token',resp.token);
      })
    );
  }
  validateToken(){
    return this.http.get<any>(`${baseUrl}/auth/renew`,{
      headers:{
        'x-token':localStorage.getItem('token') || ''
      }
    }).pipe(
      tap(resp=>{
        localStorage.setItem('token',resp.token);
      }),
      map(resp=>resp.ok),
      catchError(error=>of(false))
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
