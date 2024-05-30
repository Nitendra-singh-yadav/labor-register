import { TestBed } from '@angular/core/testing';

import { LabourRepositoryService } from './labour-repository.service';

describe('LabourRepositoryService', () => {
  let service: LabourRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
