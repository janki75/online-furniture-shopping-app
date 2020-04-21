import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituredetailComponent } from './furnituredetail.component';

describe('FurnituredetailComponent', () => {
  let component: FurnituredetailComponent;
  let fixture: ComponentFixture<FurnituredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnituredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
