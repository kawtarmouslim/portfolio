import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatctComponent } from './contatct/contatct.component';
import { ProjetComponent } from './projet/projet.component';
import { CvComponent } from './cv/cv.component';
import { PropreComponent } from './propre/propre.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatctComponent,
    ProjetComponent,
    CvComponent,
    PropreComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
