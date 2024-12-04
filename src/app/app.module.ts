import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiModule } from './swapi/swapi.module';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SwapiModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
