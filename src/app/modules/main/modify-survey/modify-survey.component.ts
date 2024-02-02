import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyDto } from 'src/app/common/entities/survey-dto';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-modify-survey',
  templateUrl: './modify-survey.component.html',
  styleUrls: ['./modify-survey.component.css'],
})
export class ModifySurveyComponent {
  id!: number;
  survey!: SurveyDto;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.url[1].path);
    console.log(this.id);
    this.surveyService
      .findById(this.id)
      .subscribe((data) => (this.survey = data));
  }

  deleteQuestion(id: number) {
    if (
      window.confirm(
        'Are sure you want to delete this question? All answer data will be lost'
      )
    )
      this.surveyService.deleteQuestion(id, this.survey.id);
  }
}
