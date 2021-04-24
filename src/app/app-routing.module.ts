import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginaPrincipal/principal.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PrincipalVistaAdmin } from './VistaAdministrador/principalVistaAdmin.component';
import { PrincipalVistaUsua } from './VistaUsuario/principalVistaUsua.component.';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GestionarDispositivos } from './VistaAdministrador/GestionarDispositivos/gestionarDisp.component';
import { GestionarTipo } from './VistaAdministrador/GestionarTipoDispositivo/gestionarTipo.component';
import { GestionarDistribuidores } from './VistaAdministrador/GestionarDistribuidores/gestionarDistribu.component';
import { GestionarTienda } from './VistaAdministrador/GestionarTiendaEnLinea/gestionarTienda.component';
import { Tienda } from './VistaUsuario/TiendaEnLinea/tienda.component';
import { Reportes } from './VistaUsuario/Reportes/reportes.component';


export let routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'registrarse', component: RegistrarseComponent},

  {path: 'principalVistaAdmin', component: PrincipalVistaAdmin},
  {path:'GestionarDispositivos', component: GestionarDispositivos},
  {path:'GestionarTipo', component: GestionarTipo},
  {path:'GestionarDistribuidores', component: GestionarDistribuidores},
  {path:'GestionarTienda', component: GestionarTienda},


  {path: 'principalVistaUsua', component: PrincipalVistaUsua},
  {path:'Tienda', component: Tienda},
  {path:'Reportes', component: Reportes},

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
