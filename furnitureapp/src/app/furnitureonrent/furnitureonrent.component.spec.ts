import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureonrentComponent } from './furnitureonrent.component';

describe('FurnitureonrentComponent', () => {
  let component: FurnitureonrentComponent;
  let fixture: ComponentFixture<FurnitureonrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureonrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureonrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
