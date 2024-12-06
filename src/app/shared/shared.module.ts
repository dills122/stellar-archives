import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SpinnerOverlayComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SpinnerOverlayComponent],
})
export class SharedModule {}
