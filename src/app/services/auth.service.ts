import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://login-service-7dxq.onrender.com/loginApi"
  // url="http://localhost:8080/loginApi";

  constructor(private http:HttpClient, private router:Router) { }

  login(email:string, password:string): Observable<any>{
    return this.http.post(this.url+"/login",{email:email,password:password});
  }

  logout(){
    localStorage.removeItem('accessToken');
  }

  public get loggedIn():boolean{
    return localStorage.getItem('accessToken')!==null;
  }

  getSub():string{
    const token=localStorage.getItem('accessToken');
    if(token){
      const decodedToken:any=jwt_decode(token)
      return decodedToken.sub;
    }
    return '';
  }
}