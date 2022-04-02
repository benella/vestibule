import { TestBed } from '@angular/core/testing';

import { PanelBackgroundService } from './panel-background.service';

describe('PanelBackgroundService', () => {
  let service: PanelBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
