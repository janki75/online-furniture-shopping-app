import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickviewfurnitureComponent } from './quickviewfurniture.component';

describe('QuickviewfurnitureComponent', () => {
  let component: QuickviewfurnitureComponent;
  let fixture: ComponentFixture<QuickviewfurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickviewfurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
