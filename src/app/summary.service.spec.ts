import { TestBed, inject } from '@angular/core/testing';

import { SummaryService } from './summary.service';

describe('SummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryService]
    });
  });

  it('should ...', inject([SummaryService], (service: SummaryService) => {
    expect(service).toBeTruthy();
  }));
});
