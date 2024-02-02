import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { AuthenticationBody } from '../common/auth/authentication-body';
import { RegistrationBody } from '../common/auth/registration-body';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:8080/api/auth/';
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  username: BehaviorSubject<string> = new BehaviorSubject('');
  token: BehaviorSubject<string> = new BehaviorSubject('');
  expirationDate!: BehaviorSubject<Date>;

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {
    this.setUp();
  }

  async authenticate(body: AuthenticationBody): Promise<boolean> {
    const url: string = this.baseUrl.concat('authenticate');
    return this.processApplication(url, body);
  }

  async register(body: RegistrationBody): Promise<boolean> {
    const url: string = this.baseUrl.concat('register');
    this.http.post<AuthenticationResponse>(url, body);
    return this.processApplication(url, body);
  }

  private async processApplication(
    url: string,
    body: RegistrationBody | AuthenticationBody
  ): Promise<boolean> {
    let response;
    try {
      response = await firstValueFrom(
        this.http.post<AuthenticationResponse>(url, body)
      );
    } catch (err) {}

    if (response?.expiration) {
      this.logIn(response);
      this.storageService.saveDetails(JSON.stringify(response));
      return true;
    } else {
      return false;
    }
  }

  private logIn(data: AuthenticationResponse) {
    this.isLoggedIn.next(true);
    this.username.next(data.username);
    this.token.next(data.token);
  }

  logOut() {
    this.isLoggedIn.next(false);
    this.username.next('');
    this.token.next('');
    this.storageService.removeDetails();
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  getUsername(): BehaviorSubject<string> {
    return this.username;
  }

  getToken(): BehaviorSubject<string> {
    return this.token;
  }

  setUp() {
    let data = this.storageService.getDetails();
    if (data) {
      let temp: AuthenticationResponse = JSON.parse(
        data
      ) as AuthenticationResponse;
      if (this.isExpirationDateValid(temp.expiration)) {
        this.logIn(temp);
        return;
      }
    }
    this.logOut();
  }

  private isExpirationDateValid(inputDate: Date): boolean {
    let date: Date = new Date(inputDate);
    if (date == null) return false;
    let now: Date = new Date();
    return now.getTime() < date.getTime();
  }
}

interface AuthenticationResponse {
  token: string;
  expiration: Date;
  username: string;
}
