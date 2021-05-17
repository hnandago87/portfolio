import { Component, OnInit } from '@angular/core';
import { TooltipDirective } from '../directives/tooltip/tooltip.directive';

@Component({
  selector: 'app-expertise-accordian',
  templateUrl: './expertise-accordian.component.html',
  styleUrls: ['./expertise-accordian.component.scss']
})
export class ExpertiseAccordianComponent implements OnInit {

  active= 0;
  constructor() { }

  ngOnInit() {
  }

  setActive(index: number) {
    if (index !== this.active) {
      this.active = index;
    } else if (index === this.active) {
      this.active = -1;
    }
  }
}
