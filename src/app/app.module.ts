import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusinessComponent } from './business/business.component';
import { BusinessResolver } from './business/business.resolver';
import { MenuMealListComponent } from './menu-meal-list/menu-meal-list.component';
import { MenuMealListResolver } from './menu-meal-list/menu-meal-list.resolver';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuMealListComponent,
    PhoneFormatPipe,
    BusinessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatChipsModule,MatCardModule
  ],
  providers: [MenuMealListResolver,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
