import { TestBed } from '@angular/core/testing';

import { VerService } from './ver.service';

describe('VerService', () => {
  let service: VerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
