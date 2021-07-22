import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuMeal, MenuMealService } from './menu-meal.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-meal-list.component.html',
  styleUrls: ['./menu-meal-list.component.scss']
})
export class MenuMealListComponent implements OnInit, OnDestroy {

  menuMealList: MenuMeal[] = [];
  sub$!: Subscription;

  constructor(private menuMealService: MenuMealService, private route: ActivatedRoute) {
  }
  

  ngOnInit(): void {

    this.sub$ = this.route.data.subscribe((data) => {
      this.menuMealList = data.menuMealList;
    })
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}