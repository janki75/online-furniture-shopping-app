import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentquickviewComponent } from './rentquickview.component';

describe('RentquickviewComponent', () => {
  let component: RentquickviewComponent;
  let fixture: ComponentFixture<RentquickviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentquickviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentquickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
