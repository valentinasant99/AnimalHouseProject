import { TestBed } from '@angular/core/testing';

import { ServizipresenzaService } from './servizipresenza.service';

describe('ServizipresenzaService', () => {
  let service: ServizipresenzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizipresenzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
