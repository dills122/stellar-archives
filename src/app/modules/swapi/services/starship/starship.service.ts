import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Starship, Starships } from '../../models/starship.model';
import { BaseService } from '../base/base.service';

@Injectable()
export class StarshipService extends BaseService {
  resourceBaseUrl: string;
  constructor(private httpClient: HttpClient) {
    super();
    this.resourceBaseUrl = this.constructResourceEndpoint('starships');
  }

  getStarshipsByPage(page = 1) {
    const url = `${this.resourceBaseUrl}?${new HttpParams()
      .set('page', page)
      .toString()}`;
    return this.httpClient.get<Starships>(url, {
      context: withCache(),
    });
  }

  getStarship(id: number) {
    return this.httpClient.get<Starship>(`${this.resourceBaseUrl}/${id}`, {
      context: withCache(),
    });
  }
}
