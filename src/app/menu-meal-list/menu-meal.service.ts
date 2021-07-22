import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';

export class MenuMeal {
  constructor() {
    this.business = new Business();
  }

  name: string = '';
  description?: string;
  rank: number = 0;
  business: Business;
  itemCountList: MenuItemCount[] = [];
  itemCount?: MenuItemCount;
  varietyList?: Variety[] = [];
  optionList?: Option[] = [];
}

export class Option {
  name: string = '';
  description?: string = '';

}
export class Variety {

  name: string = '';
  description?: string = '';

}

export class MenuItemCount {
  count: number = 0;
  cost: number = 0;
  costPerUnit?: number = 0; //TODO in the future this should not be nullable when the backend calculates it
}


export class Address {
  line1: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  phoneNumber: string = '';

}

export class Business {
  constructor() {

  }

  id: number = 0;
  name: string = '';
  website: string = '';
  locatorUrl: string = '';
  addressList: Address[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class MenuMealService {

  constructor(private httpClient: HttpClient) { }

  getMenuMealList = (id: string): Observable<MenuMeal[]> => {
    return this.httpClient
      .get<MenuMeal[]>(environment.API_URL + 'MenuMealList/' + id);
  }
}


