import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import ExperienceJSON from '../../assets/experience-description.json';

@Component({
  selector: 'app-experience-description',
  templateUrl: './experience-description.component.html',
  styleUrls: ['./experience-description.component.scss']
})
export class ExperienceDescriptionComponent implements OnChanges, OnInit {

  @Input() sectionOrg: 'CapitalOne' | 'Samsung' | 'CyberSoft' | 'NeimanMarcus' | 'Fisher' | 'Saibersys' | 'UH' | 'SSPL';
  experienceData: any;
  currentPage = 1;
  hasMorePages = false;
  

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sectionOrg.currentValue !== changes.sectionOrg.previousValue) {
      this.experienceData = ExperienceJSON[changes.sectionOrg.currentValue][`${this.currentPage}`];
      console.log("Number of pages", Object.keys(ExperienceJSON[changes.sectionOrg.currentValue]))
      this.hasMorePages = Boolean(Object.keys(ExperienceJSON[changes.sectionOrg.currentValue]).length > 1);
    }
  }

  changePage(action: 'PREVIOUS' | 'NEXT') {
    if (action === 'PREVIOUS' && this.currentPage > 1) {
      this.currentPage -= 1;
    } else if (action === 'NEXT' && this.currentPage < 3) {
      this.currentPage +=1;
    }
    this.experienceData = ExperienceJSON[this.sectionOrg][`${this.currentPage}`];
  }

}
