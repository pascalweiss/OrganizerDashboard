import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecontentComponent } from './notecontent.component';

describe('NotecontentComponent', () => {
  let component: NotecontentComponent;
  let fixture: ComponentFixture<NotecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
