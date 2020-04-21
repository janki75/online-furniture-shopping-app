import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadvertiseComponent } from './myadvertise.component';

describe('MyadvertiseComponent', () => {
  let component: MyadvertiseComponent;
  let fixture: ComponentFixture<MyadvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
