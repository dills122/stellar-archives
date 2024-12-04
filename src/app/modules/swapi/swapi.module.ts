import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';
import { BaseService } from './services/base/base.service';
import { StarshipService } from './services/starship/starship.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    StarshipService,
    BaseService,
    provideHttpClient(withInterceptors([withHttpCacheInterceptor()])),
    provideHttpCache(),
  ],
})
export class SwapiModule {}
