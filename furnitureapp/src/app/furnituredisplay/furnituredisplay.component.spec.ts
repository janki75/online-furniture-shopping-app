import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituredisplayComponent } from './furnituredisplay.component';

describe('FurnituredisplayComponent', () => {
  let component: FurnituredisplayComponent;
  let fixture: ComponentFixture<FurnituredisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnituredisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituredisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
