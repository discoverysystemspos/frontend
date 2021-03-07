import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// MODULES
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// COMPONENTS
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, data:{ titulo: 'Inicio'}  },
  { path: '**', component: NopagefoundComponent }  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
