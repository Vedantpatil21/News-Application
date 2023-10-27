import { TestBed } from '@angular/core/testing';

import { CgnewsapiService } from './cgnewsapi.service';

describe('CgnewsapiService', () => {
  let service: CgnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
