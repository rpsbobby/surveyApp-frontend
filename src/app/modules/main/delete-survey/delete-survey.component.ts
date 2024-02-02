import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SurveyDto } from 'src/app/common/entities/survey-dto';
import { AuthService } from 'src/app/services/auth.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-delete-survey',
  templateUrl: './delete-survey.component.html',
  styleUrls: ['./delete-survey.component.css'],
})
export class DeleteSurveyComponent {
  surveys!: SurveyDto[];
  creator!: string;
  user!: string;

  constructor(
    private service: SurveyService,
    private router: Router,
    private authService: AuthService
  ) {
    this.service.findAllByCreator().subscribe((data) => {
      this.surveys = data['surveys'];
      this.authService.getUsername().subscribe((data) => {
        this.user = data;
      });
    });
  }

  modify(i: number) {
    this.router.navigateByUrl('main/modify-survey/' + this.surveys[i].id);
  }

  delete(i: number) {
    if (
      window.confirm(
        'Are sure you want to delete this survey? All data will be lost'
      )
    )
      this.service.deleteSurvey(this.surveys[i].id);
  }
}
