import { TestBed, inject } from '@angular/core/testing';

import { ManagefurnitureService } from './managefurniture.service';

describe('ManagefurnitureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagefurnitureService]
    });
  });

  it('should be created', inject([ManagefurnitureService], (service: ManagefurnitureService) => {
    expect(service).toBeTruthy();
  }));
});
