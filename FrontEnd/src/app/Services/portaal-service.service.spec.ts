import { TestBed } from '@angular/core/testing';

import { PortaalServiceService } from './portaal-service.service';

describe('PortaalServiceService', () => {
  let service: PortaalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortaalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
