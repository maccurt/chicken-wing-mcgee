import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MenuMeal, MenuMealService } from './menu-meal.service';

@Injectable({
  providedIn: 'root'
})
export class MenuMealListResolver implements Resolve<MenuMeal[]> {

  constructor(private menuMealService: MenuMealService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MenuMeal[]> {

    const id = route.paramMap.get('id') as string;
    return this.menuMealService.getMenuMealList(id);
  }
}