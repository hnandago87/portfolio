import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TooltipDirective } from '../directives/tooltip/tooltip.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routerLink: RouterLink;

  constructor() { }

  ngOnInit() {
  }

}
