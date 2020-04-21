import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllAdvertiseComponent } from './see-all-advertise.component';

describe('SeeAllAdvertiseComponent', () => {
  let component: SeeAllAdvertiseComponent;
  let fixture: ComponentFixture<SeeAllAdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
