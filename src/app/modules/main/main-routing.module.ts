import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { FindAllComponent } from './find-all/find-all.component';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';
import { DeleteSurveyComponent } from './delete-survey/delete-survey.component';
import { ModifySurveyComponent } from './modify-survey/modify-survey.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'find-all', component: FindAllComponent },
  { path: 'answer-survey/:id', component: AnswerSurveyComponent },
  { path: 'delete-survey', component: DeleteSurveyComponent },
  { path: 'modify-survey/:id', component: ModifySurveyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
