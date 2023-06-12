import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    // {
    //   path: '**',
    //   redirectTo: 'home',
    //   pathMatch: 'full'
    // },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'orders',
      component:OrderListComponent
    },
    {
      path:'create',
      component:CreateOrderComponent
    }    
    // ,
    // {
    //   path: 'usuarios/home',
    //   component: UsuariosHomeComponent,
    //   canActivate: [AuthGuard]
    // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
