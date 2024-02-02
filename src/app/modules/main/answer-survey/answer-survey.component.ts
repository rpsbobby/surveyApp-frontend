import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/common/entities/answer';
import { Question } from 'src/app/common/entities/question';
import { AnswerControlService } from 'src/app/services/answer-control.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css'],
})
export class AnswerSurveyComponent {
  constructor(
    private route: ActivatedRoute,
    private service: SurveyService,
    private acs: AnswerControlService,
    private fb: FormBuilder
  ) {}

  id!: number;
  title!: string;
  creator!: string;
  surveyId!: number;
  questions: Question[] = [];
  form!: FormGroup;
  formArray!: FormArray<FormControl>;
  answers: Answer[] = [];

  ngOnInit() {
    this.id = Number(this.route.snapshot.url[1].path);
    console.log(this.id);

    this.service.findById(this.id).subscribe((data) => {
      this.title = data.title;
      this.creator = data.creator;
      this.surveyId = data.id;
      data.questions.forEach((q) => {
        let question = new Question();
        question.id = q.id;
        question.survey_id = q.survey_id;
        question.question = q.question;
        this.questions.push(question);
      });
      this.formArray = this.acs.toFormArray(this.questions);
      this.form = this.fb.group({
        answersControl: this.formArray,
      });
    });
  }

  get answersControl() {
    return this.form.get('answersControl') as FormArray;
  }

  isValid() {
    return this.form.valid;
  }

  onSubmit() {
    let payLoad = this.form.getRawValue()['answersControl'];
    // console.log(payLoad);
    this.questions.forEach((q, i) => {
      let answer = new Answer();
      answer.questionId = q.id;
      answer.answer = payLoad[i];
      this.answers.push(answer);
    });

    this.service.addAnswers(this.surveyId, this.answers);
  }
}
