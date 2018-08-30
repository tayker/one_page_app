import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule} from 'angular2-useful-swiper';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavComponent } from './secondary/nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { RentListItemComponent } from './rent-list/rent-list-item/rent-list-item.component';
import {DataService} from './data.service';
import {RentService} from './services/rent.service';
import { SingleRentComponent } from './single-rent/single-rent.component';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormModule} from './form-module/form.module';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'rent', component: RentListComponent},
  { path: 'order', component: OrderListComponent},
  { path: 'rent/:id', component: SingleRentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    RentListComponent,
    OrderListComponent,
    RentListItemComponent,
    SingleRentComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormModule
  ],
  providers: [DataService, RentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
