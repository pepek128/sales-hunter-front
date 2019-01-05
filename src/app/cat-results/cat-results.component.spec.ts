import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatResultsComponent } from './cat-results.component';

describe('CatResultsComponent', () => {
  let component: CatResultsComponent;
  let fixture: ComponentFixture<CatResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
