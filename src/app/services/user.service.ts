import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { isPartiallyEmittedExpression } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private token = 'TokenAutenticacion';
  constructor(private http: HttpClient, private router: Router) { }

  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // } 
  // users:any[] = [];
  // login(email:string, password:string): boolean{
  //   this.getUsers().subscribe(data => {
  //     this.users = data;
  //   });
  //   for(let user of this.users){
  //     if(email == user.email && password == user.password){
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  
  login(email: string, password: string):Observable<any>{
    return this.http.post<any>(this.apiUrl, {email, password}).pipe(
      tap(response =>{
        if(response.access_token){
          console.log(response.access_token);
          this.setToken(response.access_token);
        }
      })
    )
  }

  private setToken(token: string): void{
    localStorage.setItem(this.token, token);
  }

  // private getToken(): string | null{
  //   return localStorage.getItem(this.token);
  // }

  // isAuthenticated(): boolean{
  //   const token = this.getToken();
  //   if(!token){
  //     return false;
  //   }

  //   const payload = JSON.parse(atob(token.split('.')[1]));
  //   const exp = payload.exp = 1000;
  //   return Date.now() < exp;

    
  // }

  cerrarSesion():void{
    localStorage.removeItem(this.token);
    this.router.navigate(['/login']);
  }

}
