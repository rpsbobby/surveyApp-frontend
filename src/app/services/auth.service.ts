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

  persistToken(token: string): void {
    localStorage.setItem('token', token);
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

interface AuthenticationResponse {
  token: string;
}
