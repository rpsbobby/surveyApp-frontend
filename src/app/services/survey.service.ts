import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';
import { Answer } from '../common/entities/answer';
import { SurveyDto } from '../common/entities/survey-dto';
import { Question } from '../common/entities/question';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  baseUrl: string = 'http://localhost:8080/api/survey/';
  token!: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    authService.getToken().subscribe((data) => {
      this.token = 'Bearer ' + data;
    });
  }

  findAll() {
    const url: string = this.baseUrl.concat('findAll');
    return this.http.get<FindAllResponse>(url);
  }

  findById(id: number) {
    const url: string = this.baseUrl.concat('findById/').concat(id.toString());
    return this.http.get<FindByIdResponse>(url);
  }

  addAnswers(id: number, answers: Answer[]) {
    console.log(id, answers);
    const url: string = this.baseUrl.concat('submit/').concat(id.toString());
    return this.http.post<any>(url, answers).subscribe();
  }

  deleteQuestion(questionId: number, surveyId: number) {
    //delete-question/{questionId}/survey/{surveyId}

    const url: string = this.baseUrl
      .concat('delete-question/')
      .concat(questionId.toString())
      .concat('/survey/')
      .concat(surveyId.toString());

    // console.log(url);
    const headers = this.getHeaders();
    return this.http
      .delete<any>(url, { headers: headers })
      .subscribe((data) => console.log(data));
  }

  deleteSurvey(surveyId: number) {
    const url: string = this.baseUrl
      .concat('delete/')
      .concat(surveyId.toString());
    const headers = this.getHeaders();
    // console.log(url);
    return this.http
      .delete<any>(url, { headers: headers })
      .subscribe((data) => console.log(data));
  }

  addSurvey(survey: SurveyDto) {
    const url: string = this.baseUrl.concat('add');
    const headers = this.getHeaders();
    return this.http.post<any>(url, survey, { headers: headers });
  }

  update(survey: SurveyDto) {
    const url: string = this.baseUrl.concat('update');
    const headers = this.getHeaders();
    return this.http
      .post<any>(url, survey, { headers: headers })
      .subscribe((data) => console.log(data));
  }

  findAllByCreator() {
    const url = this.baseUrl.concat('getAllByCreator');
    const headers = this.getHeaders();
    return this.http.get<FindByCreator>(url, { headers: headers });
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('authorization', this.token);
    return headers;
  }

  private getToken(): string {
    const temp = null;
    if (temp != null) return temp;
    return '';
  }
}

interface FindAllResponse {
  surveys: SurveyDto[];
}
interface FindByIdResponse {
  id: number;
  title: string;
  questions: Array<Question>;
  creator: string;
}

interface FindByCreator {
  surveys: SurveyDto[];
}
