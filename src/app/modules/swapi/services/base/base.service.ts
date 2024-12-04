import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  protected baseUrl: string = 'https://swapi.dev/api';
  constructor() {
    //TODO setup the httpClient DI here, then configure it here too
  }

  protected constructResourceEndpoint(requestedResource: string) {
    return `${this.baseUrl}/${requestedResource}`;
  }
}
