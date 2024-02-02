import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySurveyComponent } from './modify-survey.component';

describe('ModifySurveyComponent', () => {
  let component: ModifySurveyComponent;
  let fixture: ComponentFixture<ModifySurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifySurveyComponent]
    });
    fixture = TestBed.createComponent(ModifySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
