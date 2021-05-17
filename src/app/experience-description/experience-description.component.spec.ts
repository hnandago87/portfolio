import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDescriptionComponent } from './experience-description.component';

describe('ExperienceDescriptionComponent', () => {
  let component: ExperienceDescriptionComponent;
  let fixture: ComponentFixture<ExperienceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
