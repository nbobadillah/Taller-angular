import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieModule } from './series/series.module';

@NgModule({
  declarations: [
    AppComponent,
      // Declara el componente de la lista de series
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
