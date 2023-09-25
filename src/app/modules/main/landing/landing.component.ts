import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(private service: SurveyService) {}

  findAll() {
    this.service.findAll();
  }

  findById() {
    console.log('findById clicked');
  }
}
