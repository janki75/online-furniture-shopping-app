
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminmenuComponent } from './adminmenu.component';

describe('AdminmenuComponent', () => {
  let component: AdminmenuComponent;
  let fixture: ComponentFixture<AdminmenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [AdminmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
