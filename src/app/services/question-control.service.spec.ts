import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './answer-control.service';

describe('QuestionControlService', () => {
  let service: QuestionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
