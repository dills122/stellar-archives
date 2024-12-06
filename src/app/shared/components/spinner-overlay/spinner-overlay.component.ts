import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay',
  standalone: false,

  templateUrl: './spinner-overlay.component.html',
  styleUrl: './spinner-overlay.component.scss',
})
export class SpinnerOverlayComponent {
  @Input() isLoadingResults: boolean = false;
}
