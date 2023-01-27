import { TestBed } from '@angular/core/testing';

import { PaginavideoService } from './paginavideo.service';

describe('PaginavideoService', () => {
  let service: PaginavideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginavideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
