import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceadvertiseformComponent } from './placeadvertiseform.component';

describe('PlaceadvertiseformComponent', () => {
  let component: PlaceadvertiseformComponent;
  let fixture: ComponentFixture<PlaceadvertiseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceadvertiseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceadvertiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
