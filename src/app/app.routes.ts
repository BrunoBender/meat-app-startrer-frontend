import {Routes} from '@Angular/router'

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { LoggedInGuard } from './security/loggedin.guard'
import { LoginComponent } from './security/login/login.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
     children:[
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent},
        
     ]},
     //o canLoad irá verificar se o LoggedInGuard retorna true para assim permitir entrar no order
   {path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard], canActivate:[LoggedInGuard]},
   {path: 'order-summary', component: OrderSummaryComponent},
   {path: '**', component: NotFoundComponent}
]