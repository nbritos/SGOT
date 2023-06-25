import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RemitoComponent } from './components/remito/remito.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CreateOrderComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    UserProfileComponent,
    RegisterUserComponent,
    RemitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
