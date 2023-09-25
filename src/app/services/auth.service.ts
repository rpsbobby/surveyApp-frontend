import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationBody } from '../common/auth/authentication-body';
import { RegistrationBody } from '../common/auth/registration-body';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  authenticate(body: AuthenticationBody): Observable<AuthenticationResponse> {
    const url: string = this.baseUrl.concat('authenticate');
    return this.http.post<AuthenticationResponse>(url, body);
  }

  register(body: RegistrationBody): Observable<AuthenticationResponse> {
    const url: string = this.baseUrl.concat('register');
    return this.http.post<AuthenticationResponse>(url, body);
  }

  // persistToken(token: string, expiration: Date): void {
  //   localStorage.setItem('token', token);
  //   localStorage.setItem('expiration', expiration.toISOString());
  // }

  // deleteToken(): void {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('expiration');
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // getExpirationDate(): null | Date {
  //   let date: string | null = localStorage.getItem('expiration');
  //   return date == null ? null : new Date(date);
  // }

  // isExpirationDateValid(): boolean {
  //   let date: Date | null = this.getExpirationDate();
  //   if (date == null) return false;
  //   let now: Date = new Date();
  //   return now.getTime() < date.getTime();
  // }
}

interface AuthenticationResponse {
  token: string;
  expiration: Date;
}
