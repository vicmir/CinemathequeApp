import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class DashboardModule { }
