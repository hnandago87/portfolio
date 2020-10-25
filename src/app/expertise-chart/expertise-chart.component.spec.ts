import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseChartComponent } from './expertise-chart.component';

describe('ExpertiseChartComponent', () => {
  let component: ExpertiseChartComponent;
  let fixture: ComponentFixture<ExpertiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
