import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/serie-list/serie-list.component'; // Asegúrate de que la ruta es correcta

const routes: Routes = [
  { path: 'series', component: SeriesListComponent }, // Ruta para mostrar la lista de series
  { path: '', redirectTo: '/series', pathMatch: 'full' } // Ruta por defecto que redirige a 'series'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
