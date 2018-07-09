import { TestBed, inject } from '@angular/core/testing';

import { ApiRatpService } from './api-ratp.service';

describe('ApiRatpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRatpService]
    });
  });

  it('should be created', inject([ApiRatpService], (service: ApiRatpService) => {
    expect(service).toBeTruthy();
  }));
});
