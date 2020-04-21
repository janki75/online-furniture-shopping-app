import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderdetailComponent } from './pastorderdetail.component';

describe('PastorderdetailComponent', () => {
  let component: PastorderdetailComponent;
  let fixture: ComponentFixture<PastorderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
