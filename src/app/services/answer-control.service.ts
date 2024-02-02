import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Question } from '../common/entities/question';

@Injectable({
  providedIn: 'root',
})
export class AnswerControlService {
  toFormArray(questions: Question[]): FormArray {
    const array: any = [];

    questions.forEach((question) => {
      let temp = new FormControl('', Validators.required);
      array.push(temp);
    });
    return new FormArray(array);
  }
}
