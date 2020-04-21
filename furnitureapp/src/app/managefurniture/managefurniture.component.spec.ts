import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefurnitureComponent } from './managefurniture.component';

describe('ManagefurnitureComponent', () => {
  let component: ManagefurnitureComponent;
  let fixture: ComponentFixture<ManagefurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
