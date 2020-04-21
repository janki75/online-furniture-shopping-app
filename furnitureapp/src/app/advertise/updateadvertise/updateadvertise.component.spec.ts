import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadvertiseComponent } from './updateadvertise.component';

describe('UpdateadvertiseComponent', () => {
  let component: UpdateadvertiseComponent;
  let fixture: ComponentFixture<UpdateadvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateadvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
