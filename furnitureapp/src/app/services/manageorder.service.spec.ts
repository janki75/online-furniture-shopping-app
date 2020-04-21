import { TestBed, inject } from '@angular/core/testing';

import { ManageorderService } from './manageorder.service';

describe('ManageorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageorderService]
    });
  });

  it('should be created', inject([ManageorderService], (service: ManageorderService) => {
    expect(service).toBeTruthy();
  }));
});
