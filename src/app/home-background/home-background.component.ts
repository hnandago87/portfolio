import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.scss']
})
export class HomeBackgroundComponent implements OnInit {

  @Input()
  hideImage?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
