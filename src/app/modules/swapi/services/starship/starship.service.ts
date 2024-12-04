import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Starship, Starships } from '../../models/starship.model';
import { Cacheable } from 'ts-cacheable';

@Injectable()
export class StarshipService extends BaseService {
  resourceBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    super();
    this.resourceBaseUrl = this.constructResourceEndpoint('starships');
  }

  @Cacheable()
  getStarshipsByPage(page = 1) {
    const url = `${this.resourceBaseUrl}?${new HttpParams()
      .set('page', page)
      .toString()}`;
    return this.httpClient.get<Starships>(url);
  }

  @Cacheable()
  getStarship(id: number) {
    return this.httpClient.get<Starship>(`${this.resourceBaseUrl}/${id}`);
  }
}
