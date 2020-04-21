import { TestBed, inject } from '@angular/core/testing';

import { ManagecategoryService } from './managecategory.service';

describe('ManagecategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagecategoryService]
    });
  });

  it('should be created', inject([ManagecategoryService], (service: ManagecategoryService) => {
    expect(service).toBeTruthy();
  }));
});
