import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from "@angular/core";

const shoppingListRoutes: Routes = [
    { path:'', component:ShoppingListComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListRoutingModule {

}