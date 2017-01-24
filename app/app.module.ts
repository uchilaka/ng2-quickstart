import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @NOTE FormsModule required for two-way-binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    // @NOTE inclusion of FormsModule in imports is required for two-way binding
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
