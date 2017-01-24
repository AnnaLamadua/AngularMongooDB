import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import './rxjs-extensions'

import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { MyInMemoryDataService } from '../services/in-memory-data.service';

// importing Hello component here
import { AppComponent } from '../component/app.component';
import { DashboardComponent } from '../component/dashboard.component';
import { HeroDetailComponent } from '../component/hero-detail.component';
import { HeroesComponent } from '../component/heroes.component';
import { HeroSearchComponent } from '../component/hero-search.component';
import { fontResizerDemoComponent } from '../component/font-resizer-demo.component';
import { fontResizerComponent } from '../component/font-resizer.component';
import { HeroService } from '../services/hero.service';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent,
    fontResizerDemoComponent, fontResizerComponent],
  providers: [HeroService]/* Service reference here to make available through all application*/,
  bootstrap: [AppComponent]
})
export class AppModule { }
