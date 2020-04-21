import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceadvertiseComponent } from './placeadvertise.component';

describe('PlaceadvertiseComponent', () => {
  let component: PlaceadvertiseComponent;
  let fixture: ComponentFixture<PlaceadvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceadvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
