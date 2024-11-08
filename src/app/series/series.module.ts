import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeriesListComponent } from './serie-list/serie-list.component';
import { SerieService } from './series.service';

@NgModule({
  declarations: [
    SeriesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SerieService],
  exports: [
    SeriesListComponent
  ]
})
export class SerieModule { }