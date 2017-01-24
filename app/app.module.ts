import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @NOTE FormsModule required for two-way-binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    // @NOTE inclusion of FormsModule in imports is required for two-way binding
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
