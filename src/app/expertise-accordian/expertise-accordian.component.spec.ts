import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseAccordianComponent } from './expertise-accordian.component';

describe('ExpertiseAccordianComponent', () => {
  let component: ExpertiseAccordianComponent;
  let fixture: ComponentFixture<ExpertiseAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
