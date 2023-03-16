import { TestBed } from '@angular/core/testing';

import { EmployeeFeatureService } from './employee-feature.service';

describe('EmployeeFeatureService', () => {
  let service: EmployeeFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
