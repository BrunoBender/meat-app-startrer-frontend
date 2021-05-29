import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DeliveryCostsComponent } from "app/delivery-costs/delivery-costs.component";
import { Sharedmodule } from "app/shared/shared.module";
import { LeaveOrderGuard } from "./leave-order.guard";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

const ROUTES = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
    declarations:[
        OrderComponent,
        OrderItemsComponent,
        DeliveryCostsComponent
        
    ],
    imports: [
        Sharedmodule,
        RouterModule.forChild(ROUTES)
    ]
})

export class OrderModule{}