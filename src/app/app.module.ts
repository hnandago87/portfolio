import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HomeBackgroundComponent } from './home-background/home-background.component';
import { ExpertiseChartComponent } from './expertise-chart/expertise-chart.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { ExpertiseAccordianComponent } from './expertise-accordian/expertise-accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    TooltipDirective,
    TooltipComponent,
    HomeBackgroundComponent,
    ExpertiseChartComponent,
    ExpertiseAccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
