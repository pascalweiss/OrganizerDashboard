import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarPreviewsComponent } from './sidebar-previews.component';

describe('SidebarPreviewsComponent', () => {
  let component: SidebarPreviewsComponent;
  let fixture: ComponentFixture<SidebarPreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
