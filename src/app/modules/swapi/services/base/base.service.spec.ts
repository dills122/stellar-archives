import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService],
    });
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('::constructResourceEndpoint', () => {
    it('should return the api url for starships, given resource starship', () => {
      const url = service['constructResourceEndpoint']('starships');
      expect(url).toContain('starships');
      expect(url).toContain('swapi.dev/api');
    });
    it('should return the api url for films, given resource films', () => {
      const url = service['constructResourceEndpoint']('films');
      expect(url).toContain('films');
      expect(url).toContain('swapi.dev/api');
    });
  });
});
