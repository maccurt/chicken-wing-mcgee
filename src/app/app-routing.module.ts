import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMealListComponent as MeanMealListComponent } from './menu-meal-list/menu-meal-list.component';
import { HomeComponent } from './home/home.component';
import { MenuMealListResolver } from './menu-meal-list/menu-meal-list.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu-item-list/:id', component: MeanMealListComponent, resolve: { menuMealList: MenuMealListResolver } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
