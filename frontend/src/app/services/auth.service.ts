import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI, LoginI, RegisterI } from '../models/jwt-response';
import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/api'
  authSubject = new BehaviorSubject(false);
  private token: string = "Tokenvalorinicialprueba";
  constructor(private httpClient: HttpClient) { }

  register(user:UserI): Observable<RegisterI>{
    return this.httpClient.post<RegisterI>(`${this.AUTH_SERVER}/users`,
    user).pipe(tap(
      (res : RegisterI)=>{  
        if(res){          
         // this.saveToken(res.dataUser.accessToken);
        }}))
      }

  login(user:UserI): Observable<LoginI>{
    return this.httpClient.post<LoginI>(`${this.AUTH_SERVER}/auth/login`,
    user).pipe(tap(
      (res : LoginI)=>{
        if(res){
          this.saveToken(res.body);
        }}))
      }
      
  logout():void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
  }

  private saveToken(token:string):void{
    localStorage.setItem("ACCESS_TOKEN",token);
    this.token=token;
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN") || "Empty Token";
    }
    return this.token;
  }
  
  
}
