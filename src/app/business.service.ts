import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Business } from './menu-meal-list/menu-meal.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private httpClient: HttpClient) { }

  getBusiness = (id: string): Observable<Business> => {

    return this.httpClient.get<Business>('http://localhost/ChickenWingMcGee.API/api/business/' + id);


  }
}
