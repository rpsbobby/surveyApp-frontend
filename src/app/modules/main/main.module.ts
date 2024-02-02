import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { FindAllComponent } from './find-all/find-all.component';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';
import { DeleteSurveyComponent } from './delete-survey/delete-survey.component';
import { ModifySurveyComponent } from './modify-survey/modify-survey.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LandingComponent,
    CreateSurveyComponent,
    FindAllComponent,
    AnswerSurveyComponent,
    DeleteSurveyComponent,
    ModifySurveyComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
  exports: [NavbarComponent],
})
export class MainModule {}
