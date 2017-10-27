import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterLinkActive } from "@angular/router";

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FriendsComponent } from './friends/friends.component';
import { FamilyComponent } from './family/family.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    FriendsComponent,
    FamilyComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: PageComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'family', component: FamilyComponent },
      { path: 'photos', component: PhotosComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
