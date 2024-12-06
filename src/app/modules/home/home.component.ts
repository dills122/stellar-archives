import { Component } from '@angular/core';
import config from '../../shared/global-config';

interface FanFavsShip {
  name: string;
  resourceId: number;
}

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = config.app.title;
  fanFavoriteShips: FanFavsShip[] = [
    {
      name: 'Millennium Falcon',
      resourceId: 10,
    },
    {
      name: 'X-Wing',
      resourceId: 12,
    },
    {
      name: 'Slave I',
      resourceId: 21,
    },
    {
      name: 'Star Destroyer',
      resourceId: 3,
    },
  ];
}
