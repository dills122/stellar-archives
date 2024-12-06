import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';
import { BaseService } from './services/base/base.service';
import { StarshipService } from './services/starship/starship.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { errorHandlingInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  exports: [],
  providers: [
    StarshipService,
    BaseService,
    provideHttpClient(
      withInterceptors([withHttpCacheInterceptor(), errorHandlingInterceptor])
    ),
    provideHttpCache(),
  ],
})
export class SwapiModule {}
