import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistcontentComponent } from './checklistcontent.component';

describe('ChecklistcontentComponent', () => {
  let component: ChecklistcontentComponent;
  let fixture: ComponentFixture<ChecklistcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
