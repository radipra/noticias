import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoticiasComponent } from './noticiasRTVE/noticiasRTVE.component';
import { HttpClientModule } from '@angular/common/http';
import { OtrasNoticiasComponent } from './otras-noticias/otras-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoticiasComponent,
    OtrasNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
