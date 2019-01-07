import { TestBed } from '@angular/core/testing';

import { SponserService } from './sponser.service';

describe('SponserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponserService = TestBed.get(SponserService);
    expect(service).toBeTruthy();
  });
});
