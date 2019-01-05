import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameResultsComponent } from './name-results.component';

describe('NameResultsComponent', () => {
  let component: NameResultsComponent;
  let fixture: ComponentFixture<NameResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
