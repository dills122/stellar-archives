import { Component } from '@angular/core';
import config from '../../shared/global-config';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = config.app.title;
}
