import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureonrentdetailComponent } from './furnitureonrentdetail.component';

describe('FurnitureonrentdetailComponent', () => {
  let component: FurnitureonrentdetailComponent;
  let fixture: ComponentFixture<FurnitureonrentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureonrentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureonrentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
