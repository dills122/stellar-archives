import { Component } from '@angular/core';
import config from '../shared/global-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = config.app.title;
  constructor() {}
}
