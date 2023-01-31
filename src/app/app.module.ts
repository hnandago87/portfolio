import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { ExperienceDescriptionComponent } from './experience-description/experience-description.component';
import { ContactComponent } from './contact/contact.component';
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
    ExpertiseAccordianComponent,
    ExperienceBlockComponent,
    ExperienceDescriptionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
