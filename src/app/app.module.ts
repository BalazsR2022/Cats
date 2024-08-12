import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { PlayComponent } from './play/play.component';
import { StoreComponent } from './store/store.component';
import { PayComponent } from './pay/pay.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play', component: PlayComponent },
  { path: 'store', component: StoreComponent },
  { path: 'pay', component: PayComponent },
  { path: 'navbar', component: NavbarComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    AboutComponent,
    PlayComponent,
    StoreComponent,
    PayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // RouterModule hozzáadása
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
