import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginaPrincipal/principal.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

export let routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'registrarse', component: RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
