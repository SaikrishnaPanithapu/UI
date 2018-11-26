import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDetailsComponent } from './schools-details.component';

describe('SchoolsDetailsComponent', () => {
  let component: SchoolsDetailsComponent;
  let fixture: ComponentFixture<SchoolsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
