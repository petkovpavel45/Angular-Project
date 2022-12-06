import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }
  constructor(private  http: HttpClient) { }

  register(email: string, username: string, tel: string, password: string) {
    
    return this.http.post<any>('/users/register', {email, username, tel, password})
  }
  login(email: string, password: string) {
    return this.http.post<any>('/login', {email, password})
  }
}
