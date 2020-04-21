import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefurnitureComponent } from './updatefurniture.component';

describe('UpdatefurnitureComponent', () => {
  let component: UpdatefurnitureComponent;
  let fixture: ComponentFixture<UpdatefurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
