import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { HomeModule } from './modules/home/home.module';
import { SwapiModule } from './modules/swapi/swapi.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    //App Modules
    SwapiModule,
    HomeModule,

    //Ang Material Imports
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync(), provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}
