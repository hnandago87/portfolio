import { NgModule } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NavigationEnd, Router, RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private titleService: Title) {
    this.router.events.subscribe((navigator: NavigationEnd) => {
      if (navigator.url && navigator.url.toLocaleLowerCase().includes('home')) {
        this.titleService.setTitle("Welcome to Hari's portfolio");
      }
      if (navigator.url && navigator.url.toLocaleLowerCase().includes('about')) {
        this.titleService.setTitle("Development work by Hari");
      }
      if (navigator.url && navigator.url.toLocaleLowerCase().includes('contact')) {
        this.titleService.setTitle("Contact Hari");
      }
    });
  }
}
