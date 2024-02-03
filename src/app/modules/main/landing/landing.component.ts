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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getIsLoggedIn().subscribe((data) => {
      this.isLoggedIn = data;
    });
  }
}
