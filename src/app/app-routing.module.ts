import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ProductsComponent } from './Components/products/products.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { BikesComponent } from './Components/bikes/bikes.component';
import { TelevisionsComponent } from './Components/televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobileComponent } from './viewmobile/viewmobile.component';
import { AddmobileComponent } from './addmobile/addmobile.component';
import { ViewbikeComponent } from './viewbike/viewbike.component';
import { AddnewbikeComponent } from './addnewbike/addnewbike.component';
import { ViewtelevisonComponent } from './viewtelevison/viewtelevison.component';
import { AddnewtelevisionComponent } from './addnewtelevision/addnewtelevision.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'test', component: TestComponent },
  { path: 'test/:id', component: UserdetailsComponent },  //routing parameter ===>> here id is parameter
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'mobiles', component: MobilesComponent ,children:[
        {path:'viewmobile',component:ViewmobileComponent},
        {path:'addnewmobile',component:AddmobileComponent},
        {path: '', redirectTo: '/products/mobiles/viewmobile', pathMatch: 'full'}
      ]},
      { path: 'bikes', component: BikesComponent ,children:[
        {path:'viewbike',component:ViewbikeComponent},
        {path:'addnewbike',component:AddnewbikeComponent},
        {path: '', redirectTo: '/products/bikes/viewbike', pathMatch: 'full'},
      ]},
      { path: 'televisions', component: TelevisionsComponent ,children:[
        {path:'viewtelevision',component:ViewtelevisonComponent},
        {path:'addnewtelevision',component:AddnewtelevisionComponent},
        {path: '', redirectTo: '/products/televisions/viewtelevision', pathMatch: 'full'}
      ]},
      { path: '', redirectTo: '/products/mobiles', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
