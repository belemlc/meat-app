import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {

  constructor (private http: Http) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }
}
