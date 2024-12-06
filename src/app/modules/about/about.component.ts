import { Component } from '@angular/core';
import config from '../../shared/global-config';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  githubUrl = 'https://github.com/dills122';
  devName = 'Dylan Steele';
  appName = config.app.title;
}
