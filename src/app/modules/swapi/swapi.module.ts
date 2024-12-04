import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BaseService } from './services/base/base.service';
import { StarshipService } from './services/starship/starship.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [StarshipService, BaseService, provideHttpClient()],
})
export class SwapiModule {}
