import { TestBed } from '@angular/core/testing';

import { ListServService } from './list-serv.service';

describe('ListServService', () => {
  let service: ListServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
