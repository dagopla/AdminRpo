import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';

const baseUrl=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(data:RegisterForm){
    return this.http.post(`${baseUrl}/users`,data);
  }
  login(body:LoginForm){
    return this.http.post(`${baseUrl}/auth`,body);
  }
}
