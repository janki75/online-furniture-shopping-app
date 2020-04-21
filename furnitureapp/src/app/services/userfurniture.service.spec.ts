import { TestBed, inject } from '@angular/core/testing';

import { UserfurnitureService } from './userfurniture.service';

describe('UserfurnitureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfurnitureService]
    });
  });

  it('should be created', inject([UserfurnitureService], (service: UserfurnitureService) => {
    expect(service).toBeTruthy();
  }));
});
