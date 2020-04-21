import { TestBed, inject } from '@angular/core/testing';

import { SubcatService } from './subcat.service';

describe('SubcatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcatService]
    });
  });

  it('should be created', inject([SubcatService], (service: SubcatService) => {
    expect(service).toBeTruthy();
  }));
});
