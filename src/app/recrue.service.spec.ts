import { TestBed } from '@angular/core/testing';

import { RecrueService } from './recrue.service';

describe('RecrueService', () => {
  let service: RecrueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecrueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
