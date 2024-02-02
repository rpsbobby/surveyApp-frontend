import { TypeModifier } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Answer } from 'src/app/common/entities/answer';
import { Question } from 'src/app/common/entities/question';
import { SurveyDto } from 'src/app/common/entities/survey-dto';
import { AuthService } from 'src/app/services/auth.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  isLoggedIn: boolean = false;

  constructor(
    private surveyService: SurveyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.authService.getIsLoggedIn.subscribe({
    //   next(value) {
    //     this.isLoggedIn = value;
    //   },
    // });
  }

  deleteQuestion() {
    const surveyId = 5;
    const questionId = 5;
    this.surveyService.deleteQuestion(questionId, surveyId);
  }

  deleteSurvey() {
    
  }

  addSurvey() {
    // const survey = new SurveyDto();
    // survey.creator = 'test';
    // survey.title = 'test2';
    // const question = new Question();
    // question.question = 'How are you?';
    // survey.questions = [question];
    // this.surveyService.addSurvey(survey);
  }

  findAll() {
    // this.surveyService.findAll();
  }

  findById() {
    const id = 4;
    this.surveyService.findById(id);
  }

  addAnswers() {
    const id = 4;
    let answers: Answer[] = [];
    const a = new Answer();
    a.answer = 'Im good';
    a.questionId = id;
    const b = new Answer();
    b.answer = 'Im very well, thank you';
    b.questionId = id;

    answers.push(a);
    answers.push(b);

    this.surveyService.addAnswers(id, answers);
  }

  updateSurvey() {
    const temp = new SurveyDto();
    temp.id = 1;
    temp.creator = 'john.doe@test.com';
    temp.title = 'Second';
    const q = new Question();
    q.question = 'What is your Name?';
    // q.id = 106;
    const q2 = new Question();
    q2.question = 'How are you??';
    // q2.id = 105;
    let arr: Question[] = [];
    // arr.push(q);
    arr.push(q2);
    temp.questions = arr;
    this.surveyService.update(temp);
  }
}
