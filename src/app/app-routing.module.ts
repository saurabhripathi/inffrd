import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './items/cart/cart/cart.component';


const routes: Routes = [{path : 'items', component : ItemsComponent},
{path : 'cart', component : CartComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
