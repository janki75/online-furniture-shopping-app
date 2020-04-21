import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelocatorComponent } from './storelocator.component';

describe('StorelocatorComponent', () => {
  let component: StorelocatorComponent;
  let fixture: ComponentFixture<StorelocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorelocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorelocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
