import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ParametrosComponent } from './page/parametros/parametros.component';
import { PlazasComponent } from './page/plazas/plazas.component';
import { RegistroSalidaComponent } from './page/registro-salida/registro-salida.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: ()=> import('src/app/main/main.module')
    .then(m=>m.MainModule)
  },
  {path: 'home', component:HomeComponent},
  {path: 'plazas', component: PlazasComponent},
  {path: 'parametros', component: ParametrosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registroSalida', component: RegistroSalidaComponent},
  {path: 'app', component: AppComponent},
  {path: '**', redirectTo: 'registro'}
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
