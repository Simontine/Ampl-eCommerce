import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { AboutComponent } from './componets/about/about.component';
import { ErrorPageComponent } from './componets/error-page/error-page.component';
import { ContactComponent } from './componets/contact/contact.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { ProductsComponent } from './componets/products/products.component';
import { ServicesComponent } from './componets/Services/services.component';
import { NewsletterComponent } from './componets/newsletter/newsletter.component';
import { LoginComponent } from './componets/login/login.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RightsComponent } from './componets/rights/rights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ProductsComponent,
    ErrorPageComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    SidebarComponent,
    NewsletterComponent,
    LoginComponent,
    FooterComponent,
    RightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  title = 'Tour of Heroes';
}

