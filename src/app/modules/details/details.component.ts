import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Starship } from '../swapi/models/starship.model';
import { StarshipService } from '../swapi/services/starship/starship.service';

@Component({
  selector: 'app-details',
  standalone: false,

  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  starship$!: Observable<Starship>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private starshipService: StarshipService,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    // Capture the ID from the route
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.router.navigate(['/explore']);
      }
      this.starship$ = this.starshipService.getStarship(Number(id));
    });
  }

  handleCostInCredits(cost: string) {
    if (cost === 'unknown') {
      return cost;
    } else {
      return this.decimalPipe.transform(cost, '1.0', 'en-US');
    }
  }

  handleManufacturers(manufacturers: string) {
    if (!manufacturers) return [];

    if (!manufacturers.includes(',')) {
      return [manufacturers];
    }
    return manufacturers.split(',');
  }
}
