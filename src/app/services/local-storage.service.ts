import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  key = 'userDetails';
  constructor() {}

  saveDetails(details: string) {
    localStorage.setItem(this.key, details);
  }

  getDetails(): string {
    let content = localStorage.getItem(this.key);
    if (content) return content;
    return '';
  }

  removeDetails() {
    localStorage.removeItem(this.key);
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
