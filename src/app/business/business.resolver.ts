import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BusinessService } from '../business.service';
import { Business } from '../menu-meal-list/menu-meal.service';

@Injectable()
export class BusinessResolver implements Resolve<Business> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Business> {

        const id = route.paramMap.get('id') as string;
        console.log('business id', id);
        return this.businessService.getBusiness(id);

    }
    constructor(private businessService: BusinessService) { }
}