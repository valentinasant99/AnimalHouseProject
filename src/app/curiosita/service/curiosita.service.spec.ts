import { TestBed } from '@angular/core/testing';

import { CuriositaService } from './curiosita.service';

describe('CuriositaService', () => {
  let service: CuriositaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriositaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
