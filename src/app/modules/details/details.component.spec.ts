import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { StarshipService } from '../swapi/services/starship/starship.service';
import { Starship } from '../swapi/models/starship.model';
import { of } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { SpinnerOverlayComponent } from '../../shared/components/spinner-overlay/spinner-overlay.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let starshipServiceMock: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    starshipServiceMock = jasmine.createSpyObj('StarshipService', [
      'getStarship',
    ]);
    starshipServiceMock.getStarship.and.returnValue(of({} as Starship));
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatCardModule, MatChipsModule],
      declarations: [DetailsComponent, SpinnerOverlayComponent],
      providers: [
        {
          provide: StarshipService,
          useValue: starshipServiceMock,
        },
        DecimalPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
