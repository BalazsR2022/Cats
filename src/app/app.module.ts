import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { PlayComponent } from './play/play.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: ContactComponent },
  { path: 'play', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    AboutComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // RouterModule hozzáadása
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
