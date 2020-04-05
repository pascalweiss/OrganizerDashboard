import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistcardComponent } from './checklistcard.component';

describe('ChecklistcardComponent', () => {
  let component: ChecklistcardComponent;
  let fixture: ComponentFixture<ChecklistcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
