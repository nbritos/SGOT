import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RemitoComponent } from './components/remito/remito.component';
import { AuthGuard } from './auth.guard';

//**usar canActivate cuando esté desarrollado el back-end **/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'remito',
    component: RemitoComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'orders',
    component: OrderListComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateOrderComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'user/register',
    component: RegisterUserComponent
  },
  {
    //Evaluar si debería redirigir al formulario de login si no tiene token
    path: 'usuarios/home',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
