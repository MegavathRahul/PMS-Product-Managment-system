import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { BikesComponent } from './Components/bikes/bikes.component';
import { TelevisionsComponent } from './Components/televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobileComponent } from './viewmobile/viewmobile.component';
import { AddmobileComponent } from './addmobile/addmobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewbikeComponent } from './viewbike/viewbike.component';
import { AddnewbikeComponent } from './addnewbike/addnewbike.component';
import { ViewtelevisonComponent } from './viewtelevison/viewtelevison.component';
import { AddnewtelevisionComponent } from './addnewtelevision/addnewtelevision.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    TestComponent,
    UserdetailsComponent,
    ViewmobileComponent,
    AddmobileComponent,
    ViewbikeComponent,
    AddnewbikeComponent,
    ViewtelevisonComponent,
    AddnewtelevisionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
