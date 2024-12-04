import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipListComponent } from './ship-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StarshipService } from '../../../swapi/services/starship/starship.service';
import { Starships } from '../../../swapi/models/starship.model';
import { of } from 'rxjs';

describe('ShipListComponent', () => {
  let component: ShipListComponent;
  let fixture: ComponentFixture<ShipListComponent>;
  let starshipServiceMock: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    starshipServiceMock = jasmine.createSpyObj('StarshipService', [
      'getStarshipsByPage',
    ]);
    starshipServiceMock.getStarshipsByPage.and.returnValue(of({} as Starships));
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, MatProgressSpinnerModule],
      declarations: [ShipListComponent],
      providers: [
        {
          provide: StarshipService,
          useValue: starshipServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
