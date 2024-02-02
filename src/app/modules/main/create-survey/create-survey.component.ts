import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/common/entities/question';
import { SurveyDto } from 'src/app/common/entities/survey-dto';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent {
  surveyForm!: FormGroup;
  submitted!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router
  ) {
    this.submitted = false;
  }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      title: ['', Validators.required],
      questions: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  get questions() {
    return this.surveyForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(
      this.formBuilder.control('', Validators.required)
    );
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    if (this.surveyForm.invalid) {
      this.surveyForm.markAllAsTouched();
      return;
    }
    // create a survey
    console.log(this.surveyForm.value);
    const survey = this.createSurvey(this.surveyForm.value);
    // pass to the service
    this.surveyService.addSurvey(survey);
  }

  private createSurvey(data: SurveyData): SurveyDto {
    let temp = new SurveyDto();
    // todo pull from token
    temp.creator = 'test';

    temp.questions = [];
    temp.title = data.title;
    data.questions.forEach((item) => {
      let question = new Question();
      question.question = item['question'];
      // console.log(q['question']);
      temp.questions.push(question);
    });
    return temp;
  }

  addNewQuestion() {}
}

interface SurveyData {
  title: string;
  questions: [];
}
interface QuestionData {
  question: string;
}
