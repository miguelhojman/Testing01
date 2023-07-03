import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { MainComponent } from './components/main/main.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { DefectosComponent } from './components/defectos/defectos.component';
import { MejorasComponent } from './components/mejoras/mejoras.component';
import { CasosComponent } from './components/casos/casos.component';
import { CriteriosComponent } from './components/criterios/criterios.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'trabajo', component: TrabajoComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'defectos', component: DefectosComponent },
  { path: 'mejoras', component: MejorasComponent },
  { path: 'casos', component: CasosComponent },
  { path: 'criterios', component: CriteriosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
