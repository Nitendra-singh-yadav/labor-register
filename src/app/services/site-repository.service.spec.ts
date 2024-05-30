import { TestBed } from '@angular/core/testing';

import { SiteRepositoryService } from './site-repository.service';

describe('SiteRepositoryService', () => {
  let service: SiteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
