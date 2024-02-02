import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SurveyDto } from 'src/app/common/entities/survey-dto';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css'],
})
export class FindAllComponent {
  surveys = [];
  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit() {
    this.surveyService.findAll().subscribe((data) => {
      this.surveys = data.surveys;
    });
  }

  answer(id: number) {
    this.router.navigate([`main/answer-survey/` + id]);
  }
}
