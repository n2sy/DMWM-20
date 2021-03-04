import { TestBed } from '@angular/core/testing';

import { ListPersonneService } from './list-personne.service';

describe('ListPersonneService', () => {
  let service: ListPersonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
