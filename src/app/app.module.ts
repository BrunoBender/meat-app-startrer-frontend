import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component'
import { Sharedmodule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './security/login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NotFoundComponent,
    OrderSummaryComponent,
    MenuComponent,
    RestaurantDetailComponent,
    ReviewsComponent,
    RestaurantsComponent,
    LoginComponent,
    HeaderComponent,
    UserDetailComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RestaurantComponent,
    Sharedmodule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
