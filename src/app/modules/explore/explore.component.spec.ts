import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreComponent } from './explore.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { StarshipService } from '../swapi/services/starship/starship.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { of } from 'rxjs';
import { Starships } from '../swapi/models/starship.model';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;
  let starshipServiceMock: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    starshipServiceMock = jasmine.createSpyObj('StarshipService', [
      'getStarshipsByPage',
    ]);
    starshipServiceMock.getStarshipsByPage.and.returnValue(of({} as Starships));
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, MatProgressSpinnerModule],
      declarations: [ExploreComponent, ShipListComponent],
      providers: [
        {
          provide: StarshipService,
          useValue: starshipServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
