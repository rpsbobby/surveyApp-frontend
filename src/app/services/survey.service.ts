import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  baseUrl: string = 'http://localhost:8080/api/survey/';
  token: string = this.getToken();
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private storageService: LocalStorageService
  ) {}

  findAll() {
    const url: string = this.baseUrl.concat('findAll');
    return this.http
      .get<FindAllResponse>(url, { headers: this.getHeaders() })
      .subscribe((data) => console.log(data));
  }

  private getHeaders(): HttpHeaders {
    const token = `Bearer ${this.token}`;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', token);
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    console.log(headers);
    return headers;
  }

  private getToken(): string {
    const temp = this.storageService.getToken();
    if (temp != null) return temp;
    return '';
  }
}

interface FindAllResponse {
  surveys: [];
}
