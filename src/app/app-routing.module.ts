import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './Components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
{path: 'usuarios', component: UsuariosComponent},
{path: 'usuario/:id', component: UsuarioComponent},
{path: 'nuevoUsuario', component: NuevoUsuarioComponent},
{path: '**', component: UsuariosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
