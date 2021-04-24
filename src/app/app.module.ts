import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { PrincipalComponent } from './paginaPrincipal/principal.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PrincipalVistaAdmin} from './VistaAdministrador/principalVistaAdmin.component';
import { PrincipalVistaUsua } from './VistaUsuario/principalVistaUsua.component.';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GestionarDispositivos } from './VistaAdministrador/GestionarDispositivos/gestionarDisp.component';
import { GestionarTipo } from './VistaAdministrador/GestionarTipoDispositivo/gestionarTipo.component';
import { GestionarDistribuidores } from './VistaAdministrador/GestionarDistribuidores/gestionarDistribu.component';
import { GestionarTienda } from './VistaAdministrador/GestionarTiendaEnLinea/gestionarTienda.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegistrarseComponent,
    PrincipalVistaAdmin,
    PrincipalVistaUsua,
    GestionarDispositivos,
    GestionarTipo,
    GestionarDistribuidores,
    GestionarTienda


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
