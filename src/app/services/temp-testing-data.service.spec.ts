import { TestBed, inject } from '@angular/core/testing';

import { TempTestingDataService } from './temp-testing-data.service';

describe('TempTestingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempTestingDataService]
    });
  });

  it('should be created', inject([TempTestingDataService], (service: TempTestingDataService) => {
    expect(service).toBeTruthy();
  }));
});
