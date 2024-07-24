import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ProductsComponent } from './componets/products/products.component';
import { ErrorPageComponent } from './componets/error-page/error-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { LoginComponent } from './componets/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomepageComponent},
  {path: '**', component: ErrorPageComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
