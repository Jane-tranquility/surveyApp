import { TestBed, inject } from '@angular/core/testing';

import { StopWordsService } from './stop-words.service';

describe('StopWordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopWordsService]
    });
  });

  it('should ...', inject([StopWordsService], (service: StopWordsService) => {
    expect(service).toBeTruthy();
  }));
});
