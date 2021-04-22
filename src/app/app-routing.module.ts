import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginaPrincipal/principal.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { PrincipalVistaAdmin } from './VistaAdministrador/principalVistaAdmin.component';
import { PrincipalVistaUsua } from './VistaUsuario/principalVistaUsua.component.';

export let routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'principalVistaAdmin', component: PrincipalVistaAdmin},
  {path: 'principalVistaUsua', component: PrincipalVistaUsua}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
