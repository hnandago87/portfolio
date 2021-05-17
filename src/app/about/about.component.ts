import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  selectedOrg: 'CapitalOne' | 'Samsung' | 'CyberSoft' | 'NeimanMarcus' | 'Fisher' | 'Saibersys' | 'UH' | 'SSPL';

  constructor() { }

  ngOnInit() {
  }

  updateSelectedOrg(org: 'CapitalOne' | 'Samsung' | 'CyberSoft' | 'NeimanMarcus' | 'Fisher' | 'Saibersys' | 'UH' | 'SSPL') {
    this.selectedOrg = org;
  }
 }
