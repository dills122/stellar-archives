import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../modules/swapi/services/starship/starship.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Stellar Archives';
  constructor(private starshipService: StarshipService) {}
  ngOnInit(): void {
    // this.starshipService
    //   .getStarshipsByPage()
    //   .pipe(tap((resp) => console.log(JSON.stringify(resp, null, 4))))
    //   .subscribe();
  }
}
