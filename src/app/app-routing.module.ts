import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';

const routes: Routes = [
  { path: 'equipo', component: EquipoComponent },
  { path: 'trabajo', component: TrabajoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
