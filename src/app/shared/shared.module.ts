import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LoginService } from "app/security/login/login.service";
import { ImputComponent } from "./imput/imput.component";
import { NotificationService } from "./messages/notification.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import {HTTP_INTERCEPTORS}   from "@angular/common/http";
import { AuthInterceptor } from "app/security/auth.interceptor";



@NgModule({
declarations:[
    RadioComponent,
    RatingComponent,
    ImputComponent,
    SnackbarComponent
],
imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
],
exports:[
    RadioComponent,
    RatingComponent,
    ImputComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SnackbarComponent
]
})

export class Sharedmodule{

    //retorna o próprio SharedModule mais os providers
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: Sharedmodule,
            providers:[
                ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}