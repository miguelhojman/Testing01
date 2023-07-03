import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { DefectosComponent } from './components/defectos/defectos.component';
import { MejorasComponent } from './components/mejoras/mejoras.component';
import { CasosComponent } from './components/casos/casos.component';
import { CriteriosComponent } from './components/criterios/criterios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    EquipoComponent,
    TrabajoComponent,
    MapaComponent,
    HistoriasComponent,
    DefectosComponent,
    MejorasComponent,
    CasosComponent,
    CriteriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
