import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { Starships } from '../swapi/models/starship.model';
import { StarshipService } from '../swapi/services/starship/starship.service';
import { IntroComponent } from './components/intro/intro.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ExploreComponent } from './explore.component';
import { SpinnerOverlayComponent } from '../../shared/components/spinner-overlay/spinner-overlay.component';

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
      declarations: [
        ExploreComponent,
        ShipListComponent,
        IntroComponent,
        SpinnerOverlayComponent,
      ],
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
