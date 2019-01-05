import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescResultsComponent } from './desc-results.component';

describe('DescResultsComponent', () => {
  let component: DescResultsComponent;
  let fixture: ComponentFixture<DescResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
