import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { PrincipalComponent } from './paginaPrincipal/principal.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarseComponent } from './registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegistrarseComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
