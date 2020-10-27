import { TestBed } from '@angular/core/testing';

import { DetailsRequestService } from './details-request.service';

describe('DetailsRequestService', () => {
  let service: DetailsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
