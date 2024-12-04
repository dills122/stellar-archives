import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StarshipService } from './starship.service';
import { provideHttpClient } from '@angular/common/http';
import { Starships } from '../../models/starship.model';

describe('StarshipService', () => {
  let service: StarshipService;
  let httpTestingController: HttpTestingController;
  const mockStarshipResp = {
    MGLT: '10 MGLT',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    cost_in_credits: '1000000000000',
    created: '2014-12-10T16:36:50.509000Z',
    crew: '342953',
    edited: '2014-12-10T16:36:50.509000Z',
    hyperdrive_rating: '4.0',
    length: '120000',
    manufacturer:
      'Imperial Department of Military Research, Sienar Fleet Systems',
    max_atmosphering_speed: 'n/a',
    model: 'DS-1 Orbital Battle Station',
    name: 'Death Star',
    passengers: '843342',
    films: ['https://swapi.dev/api/films/1/'],
    pilots: [],
    starship_class: 'Deep Space Mobile Battlestation',
    url: 'https://swapi.dev/api/starships/9/',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarshipService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(StarshipService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('::getStarshipsByPage', () => {
    it('should return the first page if not page # is provided', (done: DoneFn) => {
      const starshipsResp: Starships = {
        count: 5,
        next: 'http://url.here.test/',
        previous: null,
        results: [mockStarshipResp],
      };
      service.getStarshipsByPage().subscribe((starships) => {
        expect(starships).toEqual(starshipsResp);
        done();
      });
      httpTestingController
        .expectOne({
          method: 'GET',
        })
        .flush(starshipsResp);
    });
  });

  describe('::getStarship', () => {
    it('should return requested starship', (done: DoneFn) => {
      service.getStarship(9).subscribe((starship) => {
        expect(starship).toEqual(mockStarshipResp);
        done();
      });
      httpTestingController
        .expectOne({
          method: 'GET',
        })
        .flush(mockStarshipResp);
    });
  });
});
