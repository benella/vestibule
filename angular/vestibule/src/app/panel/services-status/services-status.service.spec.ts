import { TestBed } from '@angular/core/testing';

import { ServicesStatusService } from './services-status.service';

describe('ServicesStatusService', () => {
  let service: ServicesStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
